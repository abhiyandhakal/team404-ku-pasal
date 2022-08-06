import { User } from "../model/User";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserLoginResponse {
  @Field(() => User)
  public user: User;
}
