import { NestFactory } from '@nestjs/core';
import { AuthSericeModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthSericeModule);

  await app.listen(4001);
}
bootstrap();
