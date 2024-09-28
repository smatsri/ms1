import { Module } from '@nestjs/common';
import { LocalModule } from './local.module';

@Module({
  imports: [
    LocalModule
  ],
})
export class GatewayModule { }

