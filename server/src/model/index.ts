import { User } from "./User";
import { Product } from "./Product";
import { getModelForClass } from "@typegoose/typegoose";

export const UserModel = getModelForClass<typeof User>(User);
export const ProductModel = getModelForClass<typeof Product>(Product);
