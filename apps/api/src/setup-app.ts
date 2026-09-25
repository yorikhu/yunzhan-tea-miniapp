import type { INestApplication } from '@nestjs/common';

export function configureApp(app: INestApplication): void {
  const configuredOrigins = process.env.CORS_ORIGIN?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: configuredOrigins?.length ? configuredOrigins : true,
  });
}
