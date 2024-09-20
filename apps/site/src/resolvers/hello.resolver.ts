import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class HelloResult {
  @Field()
  success: boolean;
  @Field()
  message: string;
}

@InputType()
export class HelloRequest {
  @Field()
  name: string;
}

@Resolver(() => HelloResult)
export class HelloResolver {

  @Query(returns => String)
  async apiVersion() {
    return "1.0.0";
  }

  @Mutation(() => HelloResult)
  async test(@Args('input') req: HelloRequest): Promise<HelloResult> {
    return {
      message: 'hello ' + req.name,
      success: true,
    };
  }
}