import type { Request, Response } from 'express';
import { sendSuccess } from '../utils/api-response.js';

export function getHealth(_req: Request, res: Response): void {
  sendSuccess(res, {
    service: 'smart-leads-api',
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}
