import { Field, ObjectType } from "type-graphql";
import { User } from "../model/User";

@ObjectType()
export class MeQueryResponse {
  @Field(() => User)
  public user!: User;
}
