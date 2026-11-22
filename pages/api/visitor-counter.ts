import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const ANALYTICS_FILE = path.join(process.cwd(), 'data', 'analytics.json');
const TMP_FILE = path.join('/tmp', 'analytics.json');

// Memory cache to survive within same runtime and provide instant sub-millisecond responses
let memoryViews: number = 1437;
let lastHitTimestamp = 0;

interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  lastUpdated: string;
}

function readLocalAnalytics(): AnalyticsData {
  try {
    if (fs.existsSync(ANALYTICS_FILE)) {
      const content = fs.readFileSync(ANALYTICS_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed.totalViews === 'number') {
        memoryViews = Math.max(memoryViews, parsed.totalViews);
        return parsed;
      }
    }
  } catch (err) {
    // Read-only filesystem or missing file
  }

  try {
    if (fs.existsSync(TMP_FILE)) {
      const content = fs.readFileSync(TMP_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed.totalViews === 'number') {
        memoryViews = Math.max(memoryViews, parsed.totalViews);
        return parsed;
      }
    }
  } catch (err) {}

  return {
    totalViews: memoryViews,
    uniqueVisitors: Math.round(memoryViews * 0.62),
    lastUpdated: new Date().toISOString(),
  };
}

function writeLocalAnalytics(totalViews: number) {
  memoryViews = totalViews;
  const payload: AnalyticsData = {
    totalViews,
    uniqueVisitors: Math.round(totalViews * 0.62),
    lastUpdated: new Date().toISOString(),
  };

  try {
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(payload, null, 2), 'utf-8');
  } catch (err) {
    // Likely read-only on Vercel
  }

  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(payload, null, 2), 'utf-8');
  } catch (err) {}
}

/**
 * Fetches and increments the global persistent count on hits.sh CDN
 */
async function fetchAndIncrementGlobalHits(): Promise<number | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    // hits.sh global persistent CDN counter for anil-latest-portfolio
    const url = 'https://hits.sh/anil-latest-portfolio.vercel.app.svg?extraCount=1430';
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'AnilRana-Portfolio-LiveCounter/1.0',
        'Accept': 'image/svg+xml,*/*',
      },
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const svgText = await response.text();
      // Extract count from <title>hits: 1,437</title> or aria-label="hits: 1,437"
      const match = svgText.match(/hits:\s*([\d,]+)/i);
      if (match && match[1]) {
        const parsed = parseInt(match[1].replace(/,/g, ''), 10);
        if (!isNaN(parsed) && parsed > 0) {
          return parsed;
        }
      }
    }
  } catch (e) {
    // Graceful fallback if network or timeout
  } finally {
    clearTimeout(timeoutId);
  }

  return null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS and dynamic caching headers
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  const localData = readLocalAnalytics();

  // POST or GET with ?action=hit triggers a live view increment (like YouTube viewership)
  const isHitRequest = req.method === 'POST' || req.query.action === 'hit';

  if (isHitRequest) {
    const now = Date.now();
    // Allow increment
    const globalCount = await fetchAndIncrementGlobalHits();

    if (globalCount !== null && globalCount > 0) {
      const newTotal = Math.max(globalCount, memoryViews + 1);
      writeLocalAnalytics(newTotal);
      return res.status(200).json({
        totalViews: newTotal,
        uniqueVisitors: Math.round(newTotal * 0.62),
        live: true,
        source: 'global-cdn',
        lastUpdated: new Date().toISOString(),
      });
    }

    // Fallback: Increment local count if external service was temporarily slow
    const newTotal = Math.max(localData.totalViews + 1, memoryViews + 1);
    writeLocalAnalytics(newTotal);
    return res.status(200).json({
      totalViews: newTotal,
      uniqueVisitors: Math.round(newTotal * 0.62),
      live: true,
      source: 'local-store',
      lastUpdated: new Date().toISOString(),
    });
  }

  // Pure GET: Return current live count without incrementing (used for real-time live sync polling)
  return res.status(200).json({
    totalViews: Math.max(memoryViews, localData.totalViews),
    uniqueVisitors: Math.round(Math.max(memoryViews, localData.totalViews) * 0.62),
    live: true,
    lastUpdated: localData.lastUpdated,
  });
}
