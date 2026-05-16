import { createApp } from './app.js';
import { connectDatabase } from './config/database.js';
import { env } from './config/env.js';

async function bootstrap(): Promise<void> {
  await connectDatabase();

  const app = createApp();

  app.listen(env.PORT, () => {
    console.info(`[server] Running on http://localhost:${env.PORT}`);
    console.info(`[server] Health check: http://localhost:${env.PORT}/api/health`);
  });
}

bootstrap().catch((error: unknown) => {
  console.error('[server] Failed to start', error);
  process.exit(1);
});
