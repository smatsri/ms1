import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloResolver } from './resolvers/hello.resolver';
import { RootResolver } from './resolvers/root.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
  ],
  providers: [RootResolver, HelloResolver],
})
export class AppModule { }

