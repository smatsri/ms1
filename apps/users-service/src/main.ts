import { NestFactory } from '@nestjs/core';
import { UsersModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  await app.listen(4002);
}
bootstrap();
