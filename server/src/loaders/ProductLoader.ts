import DataLoader from "dataloader";
import { ProductModel } from "../model";
import { Product } from "../model/Product";

const batchProducts = async (ids: readonly string[]): Promise<Product[]> => {
  const users = await ProductModel.find({ _id: { $in: ids } });
  const lookup: Record<string, Product> = users.reduce((acc, product) => {
    acc[product._id.toString()] = product;
    return acc;
  }, {} as Record<string, Product>);

  return ids.map((i) => lookup[i]);
};

export const createProductLoader = () =>
  new DataLoader<string, Product>(batchProducts);
