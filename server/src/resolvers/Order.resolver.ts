import { Order } from "../model/Order";
import {
  Authorized,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { OrderModel } from "../model";
import { User } from "../model/User";
import { GraphQLContext } from "../structures/GraphQLContext";
import { DocumentType } from "@typegoose/typegoose";
import { Product } from "../model/Product";

@Resolver(() => Order)
export class OrderResolver {
  @FieldResolver(() => User)
  async buyer(
    @Root() order: DocumentType<Order>,
    @Ctx() { userLoader }: GraphQLContext
  ) {
    const user_id = order.buyer?.toString();
    const user = await userLoader.load(user_id as string);
    return user;
  }

  @FieldResolver(() => User)
  async seller(
    @Root() order: DocumentType<Order>,
    @Ctx() { userLoader }: GraphQLContext
  ): Promise<User> {
    const user_id = order.seller?.toString();
    const user = await userLoader.load(user_id as string);
    return user;
  }

  @FieldResolver(() => Product)
  async product(
    @Root() order: DocumentType<Order>,
    @Ctx() { productLoader }: GraphQLContext
  ): Promise<Product> {
    const product_id = order.product?.toString();
    const p = await productLoader.load(product_id as string);
    return p;
  }

  @Authorized()
  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    const odrs = OrderModel.find();
    return odrs;
  }
}
