import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const ANALYTICS_FILE = path.join(process.cwd(), 'data', 'analytics.json');

interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  lastUpdated: string;
}

const DEFAULT_ANALYTICS: AnalyticsData = {
  totalViews: 1428,
  uniqueVisitors: 892,
  lastUpdated: new Date().toISOString()
};

function readAnalytics(): AnalyticsData {
  try {
    if (fs.existsSync(ANALYTICS_FILE)) {
      const content = fs.readFileSync(ANALYTICS_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.warn('Error reading analytics.json:', err);
  }
  return DEFAULT_ANALYTICS;
}

function writeAnalytics(data: AnalyticsData) {
  try {
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Read-only environment, unable to persist analytics to disk:', err);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = readAnalytics();

  if (req.method === 'GET') {
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { isNewSession } = req.body || {};

    data.totalViews += 1;
    if (isNewSession) {
      data.uniqueVisitors += 1;
    }
    data.lastUpdated = new Date().toISOString();

    writeAnalytics(data);
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
