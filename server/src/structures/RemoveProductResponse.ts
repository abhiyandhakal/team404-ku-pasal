import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class RemoveProductResponse {
  @Field(() => Boolean)
  public success: boolean;

  @Field(() => String)
  public message: string;
}
