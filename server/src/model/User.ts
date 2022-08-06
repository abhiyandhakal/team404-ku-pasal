import { DocumentType, mongoose, pre, prop, Ref } from "@typegoose/typegoose";
import * as argon2 from "argon2";
import md5 from "md5";
import { flake } from "../utils/flake";
import { Field, Int, ObjectType } from "type-graphql";
import { Product } from "./Product";
import { ProductModel } from ".";

@ObjectType()
export class Profile {
  @Field(() => String)
  @prop({
    type: () => String,
    default: function (profile: DocumentType<Profile>) {
      const user = profile.$parent() as DocumentType<User>;
      return `https://robohash.org/${md5(user.username)}?set=set4`;
    },
  })
  public avatar?: string;

  @Field(() => String)
  @prop({ required: true, type: () => String })
  public address: string;

  @Field(() => String)
  @prop({ type: () => String, default: () => "" })
  public bio: string;
}

@ObjectType()
export class Authority {
  @Field(() => Int)
  @prop({ default: () => 0, type: () => Number, required: true })
  public level!: number;

  @prop({ default: () => null, type: () => String })
  public adminToken!: string;
}

@ObjectType()
@pre<User>("save", async function (next) {
  this.updatedAt = Date.now();
  if (!this.isModified("password")) {
    next();
  }
  this.password = await argon2.hash(this.password, { type: argon2.argon2id });
})
export class User {
  @Field(() => String, { nullable: true })
  public _id: string;

  @Field(() => Number, { nullable: true })
  @prop({
    unique: true,
    default: () => parseInt(flake.gen().toString()),
  })
  public id: number;

  @Field(() => String)
  @prop({
    required: true,
    unique: true,
  })
  public username!: string;

  @Field(() => String)
  @prop({ required: true, unique: true, lowercase: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @Field(() => Number)
  @prop({ required: true })
  public phoneNumber: number;

  @Field(() => Date)
  @prop({ type: () => Date, default: () => Date.now() })
  public createdAt?: number;

  @Field(() => Date)
  @prop({ type: () => Date, default: () => Date.now() })
  public updatedAt?: number;

  @Field(() => Boolean)
  @prop({ type: () => Boolean, default: () => false })
  public isEmailVerified?: boolean;

  @Field(() => Profile)
  @prop({ type: () => Profile, required: true, _id: false })
  public profile!: Profile;

  @Field(() => [Product])
  @prop({
    type: () => [mongoose.Schema.Types.ObjectId],
    ref: () => Product,
    default: [],
  })
  public products: Ref<Product>[];

  @Field(() => Authority)
  @prop({
    type: () => Authority,
    default: () => {
      const authority = new Authority();
      return authority;
    },
    _id: false,
  })
  public authority!: Authority;

  /**
   * Checks if the plain entered password matches with hashed password.
   * @param password Enter plain password, that is to be compared with hashed password.
   * @returns {Promise<boolean>} ```true```  if the password matches and ```false``` if not.
   */
  public async verifyPassword(
    this: DocumentType<User>,
    password: string
  ): Promise<boolean> {
    return await argon2.verify(this.password, password);
  }

  /**
   * Adds product to the users profile
   * @param product Product that you wish to add to users profile
   * @returns {Promise<boolean>} ```true``` if it is successfully added ```false``` otherwise.
   */
  public async addProduct(
    this: DocumentType<User>,
    product: Product
  ): Promise<boolean> {
    this.products.push(product._id);
    try {
      await this.save();
      return true;
    } catch {
      return false;
    }
  }

  public async removeProduct(
    this: DocumentType<User>,
    productId: string
  ): Promise<boolean> {
    // console.log(this.products.map((i) => i?.toString()));
    const stringProducts = this.products.map((i) => i?.toString());
    const index = stringProducts.indexOf(productId);
    if (index > -1) {
      this.products.splice(stringProducts.indexOf(productId), 1);
    }

    try {
      await ProductModel.findOneAndDelete({ _id: productId });
      await this.save();
      return true;
    } catch {
      return false;
    }
  }
}
