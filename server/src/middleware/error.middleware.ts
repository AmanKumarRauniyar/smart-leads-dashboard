import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import type { ApiErrorResponse } from '../types/api.types.js';
import { HttpStatus } from '../constants/http-status.js';
import { env } from '../config/env.js';

export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly errors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof AppError) {
    const body: ApiErrorResponse = {
      success: false,
      message: err.message,
      ...(err.errors ? { errors: err.errors } : {}),
    };
    res.status(err.statusCode).json(body);
    return;
  }

  if (err instanceof ZodError) {
    const body: ApiErrorResponse = {
      success: false,
      message: 'Validation failed',
      errors: err.flatten().fieldErrors as Record<string, string[]>,
    };
    res.status(HttpStatus.BAD_REQUEST).json(body);
    return;
  }

  if (env.NODE_ENV !== 'production') {
    console.error(err);
  }

  const body: ApiErrorResponse = {
    success: false,
    message: 'Internal server error',
  };
  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(body);
}
