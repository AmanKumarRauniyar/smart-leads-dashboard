import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDatabase(): Promise<void> {
  if (!env.MONGODB_URI) {
    console.warn('[database] MONGODB_URI not set — skipping connection (Phase 4)');
    return;
  }

  try {
    await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5_000,
    });
    console.info('[database] Connected to MongoDB');
  } catch (error) {
    if (env.NODE_ENV === 'development') {
      console.warn(
        '[database] MongoDB unavailable — API will run without DB until Phase 4',
      );
      return;
    }
    throw error;
  }
}
