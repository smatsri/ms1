import { Module } from '@nestjs/common';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2
      },
    }),

  ],
  providers: [AuthResolver],
  exports: [AuthResolver],
})
export class AuthFederationModule {

}
