import { Order } from "../model/Order";
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { OrderModel, UserModel } from "../model";
import { User } from "../model/User";
import { GraphQLContext } from "../structures/GraphQLContext";
import { DocumentType } from "@typegoose/typegoose";
import { Product } from "../model/Product";
import { UserResolverError } from "../structures/ErrorTypes";

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
  @Query(() => [Order], { nullable: true })
  async orders(): Promise<Order[]> {
    const odrs = OrderModel.find();
    return odrs;
  }

  @Authorized()
  @Mutation(() => Boolean, { nullable: true })
  async removeOrder(
    @Arg("orderID") order_id: string,
    @Ctx() { req }: GraphQLContext
  ): Promise<boolean> {
    if (!req.session.data) {
      // The provided session doesnot exist, or there is no session cookie set.
      throw new UserResolverError("Session is invalid", "INVALID_SESSION_ID", [
        { message: "Session is invalid.", field: "session_id" },
      ]);
    }

    const user = await UserModel.findOne({ id: req.session.data.id });

    if (!user) {
      // The user with that session id doesnot exist. Maybe user was deleted.
      throw new UserResolverError(
        "The user with that session id doesnot exist.",
        "USER_DOESNOT_EXIST",
        [{ message: "User session id doesnot exist.", field: "session id" }]
      );
    }

    if (!user.isAdmin) {
      throw new UserResolverError("You are not authorized.", "NOT_AUTHORIZED", {
        message: "You are not authorized to remove the order.",
      });
    }
    try {
      await OrderModel.findOneAndDelete({ _id: order_id as string });
      return true;
    } catch {
      return false;
    }
  }
}
