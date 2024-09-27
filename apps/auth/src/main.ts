import { NestFactory } from '@nestjs/core';
import { AuthFederationModule } from '@app/auth-lib';

async function bootstrap() {
  const app = await NestFactory.create(AuthFederationModule);

  await app.listen(4001);
}
bootstrap();
