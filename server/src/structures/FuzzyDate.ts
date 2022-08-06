import { prop } from "@typegoose/typegoose";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class FuzzyDate {
  @Field(() => Int, { nullable: true })
  @prop()
  public year!: number;

  @Field(() => Int, { nullable: true })
  @prop()
  public month!: number;

  @Field(() => Int, { nullable: true })
  @prop()
  public day!: number;
}
