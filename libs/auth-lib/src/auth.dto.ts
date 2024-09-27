import { Field, ObjectType, InputType } from '@nestjs/graphql';

@InputType() // Input type for the mutation
export class GetTokenRequest {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType() // Output type for the mutation response
export class GetTokenResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  errorMessage?: string;

  @Field({ nullable: true })
  token?: string;
}