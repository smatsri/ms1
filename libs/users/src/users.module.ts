import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/users.resolver';


@Module({
  providers: [UsersResolver],
  exports: [UsersResolver],
})
export class UsersModule { }
