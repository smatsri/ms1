import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GetTokenRequest, GetTokenResponse } from './auth.dto';



@Resolver("auth")
export class AuthResolver {

  @Query(() => String)
  authApiVersion() {
    return "1.0.0";
  }

  @Mutation(() => GetTokenResponse) // Corrected output type for mutation
  async authGetToken(@Args('input') req: GetTokenRequest): Promise<GetTokenResponse> {
    if (req.username === 'admin' && req.password === '123456') {
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
