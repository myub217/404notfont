// api/cron.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse): void {
  res.status(200).send('🕒 Cron triggered successfully!');
}