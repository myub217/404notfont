// api/cron.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // ✅ เพิ่ม logic จริงตรงนี้ได้ เช่น ดึงข้อมูล, ทำ cron job ฯลฯ
  const now = new Date().toISOString();

  res.status(200).json({
    message: '✅ Cron job executed successfully!',
    timestamp: now,
  });
}