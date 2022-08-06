import { Product } from "../model/Product";
import { DocumentType } from "@typegoose/typegoose";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { User } from "../model/User";
import { ProductModel, UserModel } from "../model";
import { GraphQLContext } from "../structures/GraphQLContext";
import {
  ProductResolverError,
  UserResolverError,
} from "../structures/ErrorTypes";
import { RemoveProductResponse } from "../structures/RemoveProductResponse";

@Resolver(Product)
export class ProductResolver {
  @FieldResolver(() => User)
  async seller(
    @Root() product: DocumentType<Product>,
    @Ctx() { userLoader }: GraphQLContext
  ): Promise<User> {
    const user_id = product.seller?.toString();
    const user = await userLoader.load(user_id as string);
    return user;
  }

  @Query(() => Product)
  async productByID(@Arg("_id") _id: string): Promise<Product> {
    const p = await ProductModel.findById(_id);

    if (!p) {
      throw new ProductResolverError(
        "Cannot find the product",
        "CANNOT_FIND_PRODUCT",
        { message: "Cannot find the product." }
      );
    }

    return p;
  }

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    const res = await ProductModel.find();
    return res;
  }

  @Mutation(() => Product)
  async updateProductById(
    @Ctx() { req }: GraphQLContext,
    @Arg("_id", () => String, { nullable: true }) _id: string,
    @Arg("category", () => String) category: string,
    @Arg("price", () => Number) price: number,
    @Arg("name", () => String, { nullable: true }) name?: string,
    @Arg("description", () => String, { nullable: true }) desc?: string,
    @Arg("available", () => Boolean, { nullable: true }) available?: boolean,
    @Arg("thumbnail", () => String, { nullable: true })
    thumbnail?: string
  ): Promise<Product> {
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

    if (!user.products.includes(_id)) {
      throw new ProductResolverError(
        "Cannot update product",
        "PRODUCT_UPDATE_FAILED",
        { message: "Cannot update the product." }
      );
    }

    try {
      const p = await ProductModel.findOneAndUpdate(
        { _id },
        {
          name,
          description: desc,
          category,
          available,
          thumbnail,
          price,
        }
      );
      return p as Product;
    } catch {
      throw new ProductResolverError(
        "Cannot update the product.",
        "PRODUCT_UPDATE_FAILED",
        [{ message: "Something went wrong while updating product" }]
      );
    }
  }

  @Mutation(() => Product)
  async newProduct(
    @Ctx() { req }: GraphQLContext,
    @Arg("name", () => String) name: string,
    @Arg("description", () => String) desc: string,
    @Arg("price", () => Number) price: number,
    @Arg("category", () => String) category: string,
    @Arg("available", () => Boolean, { nullable: true }) available?: boolean,
    @Arg("thumbnail", () => String)
    thumbnail?: string
  ): Promise<Product> {
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

    const p = new ProductModel({
      name,
      description: desc,
      category,
      available,
      thumbnail,
      seller: user._id,
      price,
    });

    if (!(await user.addProduct(p)))
      throw new UserResolverError(
        "Something went wrong with this request.",
        "PRODUCT_CREATION_ERROR",
        [
          {
            message:
              "Something went wrong while creating this product, please try again.",
          },
        ]
      );

    await p.save();
    return p;
  }

  @Mutation(() => RemoveProductResponse)
  async removeProduct(
    @Ctx() { req }: GraphQLContext,
    @Arg("_id", () => String) _id: string
  ): Promise<RemoveProductResponse> {
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

    if (!user.products.includes(_id)) {
      throw new ProductResolverError(
        "Cannot remove product",
        "PRODUCT_REMOVE_FAILED",
        { message: "Cannot remove the product." }
      );
    }

    if (!(await user.removeProduct(_id))) {
      throw new ProductResolverError(
        "Cannot remove product",
        "PRODUCT_REMOVE_FAILED",
        { message: "Cannot remove the product." }
      );
    }

    return {
      success: true,
      message: "The product has been removed.",
    } as RemoveProductResponse;
  }
}
