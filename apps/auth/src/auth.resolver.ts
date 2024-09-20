import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
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

@Resolver()
export class AuthResolver {

  @Query(() => String)
  authApiVersion() {
    return "1.0.0";
  }

  @Mutation(() => GetTokenResponse) // Corrected output type for mutation
  async getToken(@Args('input') req: GetTokenRequest): Promise<GetTokenResponse> {
    if (req.username === 'test' && req.password === 'test') {
      return {
        success: true,
        errorMessage: 'login successful',
        token: 'test'
      };
    } else {
      return {
        success: false,
        errorMessage: 'login failed'
      };
    }
  }
}
