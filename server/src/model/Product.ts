import { prop, mongoose, Ref } from "@typegoose/typegoose";
import { Authorized, Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Thumbnail {
  @Field(() => String)
  public small: string;

  @Field(() => String)
  public large: string;
}

@ObjectType()
export class Product {
  @Field(() => String, { nullable: true })
  public _id: string;

  @Field(() => String)
  @prop({
    type: () => String,
    required: true,
  })
  public name!: string;

  @Field(() => String)
  @prop({ type: () => String, required: true })
  public description!: string;

  @Field(() => Boolean)
  @prop({ type: () => Boolean, default: true })
  public available?: boolean;

  @Field(() => String)
  @prop({ type: () => String, nullable: false })
  public category!: string;

  @Field(() => Date)
  @prop({ type: () => Date, default: () => Date.now() })
  public createdAt?: number;

  @Field(() => String)
  @prop({ type: () => String })
  public thumbnail: string;

  @Authorized()
  @Field(() => Boolean, { nullable: true })
  @prop({ type: Boolean, default: false })
  public sold: boolean;

  @Field(() => Boolean)
  @prop({ type: () => Boolean, default: false })
  public isApproved: boolean;

  @Field(() => User)
  @prop({
    type: () => mongoose.Schema.Types.ObjectId,
    ref: () => User,
    required: true,
  })
  public seller!: Ref<User>;

  @Field(() => Number)
  @prop({
    type: Number,
    required: true,
  })
  public price!: number;
}
