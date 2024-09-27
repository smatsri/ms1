import { Field, Int, ObjectType } from "@nestjs/graphql";

export type UserRole = 'admin' | 'user' | 'guest';

@ObjectType() // Output type for the mutation response
export class Profile {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  role: UserRole;
}
