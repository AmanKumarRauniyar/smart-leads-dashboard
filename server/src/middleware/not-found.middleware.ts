import type { Request, Response } from 'express';
import type { ApiErrorResponse } from '../types/api.types.js';
import { HttpStatus } from '../constants/http-status.js';

export function notFoundHandler(_req: Request, res: Response): void {
  const body: ApiErrorResponse = {
    success: false,
    message: 'Route not found',
  };
  res.status(HttpStatus.NOT_FOUND).json(body);
}
