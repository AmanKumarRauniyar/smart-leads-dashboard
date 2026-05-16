import type { Response } from 'express';
import type { ApiSuccessResponse, PaginationMeta } from '../types/api.types.js';
import { HttpStatus } from '../constants/http-status.js';

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = 'Success',
  statusCode = HttpStatus.OK,
  pagination?: PaginationMeta,
): void {
  const body: ApiSuccessResponse<T> = {
    success: true,
    message,
    data,
    ...(pagination ? { pagination } : {}),
  };

  res.status(statusCode).json(body);
}
