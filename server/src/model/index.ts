import { User } from "./User";
import { Product } from "./Product";
import { getModelForClass } from "@typegoose/typegoose";
import { Order } from "./Order";

export const UserModel = getModelForClass<typeof User>(User);
export const ProductModel = getModelForClass<typeof Product>(Product);
export const OrderModel = getModelForClass<typeof Order>(Order);
