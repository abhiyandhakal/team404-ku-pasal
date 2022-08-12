import { mongoose, prop, Ref } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Product } from "./Product";
import { User } from "./User";

@ObjectType()
export class Order {
  @Field(() => String)
  public _id: string;

  @Field(() => Date)
  @prop({
    type: () => Date,
    default: () => Date.now(),
  })
  public orderedAt: Date;

  @Field(() => User)
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: () => User,
    required: true,
  })
  public seller: Ref<User>;

  @Field(() => User)
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: () => User,
    required: true,
  })
  public buyer: Ref<User>;

  @Field(() => Product)
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: () => Product,
    required: true,
  })
  public product: Ref<Product>;
}
