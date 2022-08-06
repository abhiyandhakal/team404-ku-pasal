import {
  IsEmail,
  IsPhoneNumber,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "../model/User";

@InputType()
export class UserRegisterInputProfile {
  @Field(() => String, { nullable: false })
  public address: string;
}

@InputType()
export class UserRegisterInput {
  @Matches(/^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, {
    message: "Username doesnot match with our schema.",
  })
  @MinLength(4, { message: "Username must be atleast 4 character long." })
  @MaxLength(15, { message: "Username must be atmost 15 character long." })
  @Field(() => String, { nullable: false })
  public username: string;

  @IsEmail({}, { message: "Email is not valid." })
  @Field(() => String, { nullable: false })
  public email: string;

  @IsPhoneNumber("NP", { message: "Invalid phone number" })
  @Field(() => String, { nullable: false })
  public phoneNumber: string;

  // @Matches(
  //   /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
  //   { message: "Password doesnot match with out schema" }
  // )
  @MinLength(4, { message: "Password must be atleast 4 character long." })
  @Field(() => String, { nullable: false })
  public password: string;

  @Field(() => UserRegisterInputProfile, { nullable: false })
  public profile: UserRegisterInputProfile;
}

@ObjectType()
export class UserRegisterResponse {
  @Field(() => User, { nullable: true })
  public user!: User;
}
