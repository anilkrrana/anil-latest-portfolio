import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { INITIAL_PREP_STATE } from '../../data/defaultPrepData';
import { PrepState } from '../../types/prep';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'userPrepState.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET: Fetch the current persisted state from data/userPrepState.json
  if (req.method === 'GET') {
    try {
      if (fs.existsSync(DATA_FILE_PATH)) {
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        const data = JSON.parse(fileContent);
        return res.status(200).json(data);
      } else {
        // If file does not exist yet, write INITIAL_PREP_STATE to create it
        try {
          fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(INITIAL_PREP_STATE, null, 2), 'utf-8');
        } catch (writeErr) {
          console.warn('Could not auto-create data/userPrepState.json:', writeErr);
        }
        return res.status(200).json(INITIAL_PREP_STATE);
      }
    } catch (err: any) {
      console.error('Error reading prep state:', err);
      return res.status(200).json(INITIAL_PREP_STATE);
    }
  }

  // POST: Save updated state to data/userPrepState.json on disk
  if (req.method === 'POST') {
    const { state, pin } = req.body || {};
    const targetPin = process.env.NEXT_PUBLIC_PREP_ADMIN_PIN || '773970';

    if (pin !== targetPin) {
      return res.status(401).json({ error: 'Unauthorized: Invalid Owner PIN' });
    }

    if (!state || !state.dsaTopics || !state.targetDate) {
      return res.status(400).json({ error: 'Invalid PrepState payload' });
    }

    try {
      fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(state, null, 2), 'utf-8');
      return res.status(200).json({ 
        success: true, 
        message: 'Successfully saved to data/userPrepState.json on disk! Ready for git commit.' 
      });
    } catch (writeErr: any) {
      console.error('Failed to write to file:', writeErr);
      // In read-only serverless environments like Vercel runtime, file write may fail
      return res.status(200).json({
        success: false,
        isReadOnly: true,
        message: 'Server environment is read-only. State preserved in local browser storage.',
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
