import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Profile } from './users.model';


@Resolver("users")
export class UsersResolver {

  @Query(() => Profile)
  me(): Profile {
    return {
      age: 18,
      name: "avi",
      role: "admin"
    };
  }
}
