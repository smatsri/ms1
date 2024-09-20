// cats.resolver.ts
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RootResolver {
  @Query(() => String) // This is our root query type
  hello(): string {
    return 'Hello, GraphQL!';
  }
}
