import DataLoader from "dataloader";
import { UserModel } from "../model";
import { User } from "../model/User";

const batchUsers = async (ids: readonly string[]): Promise<User[]> => {
  const users = await UserModel.find({ _id: { $in: ids } });
  const lookup: Record<string, User> = users.reduce((acc, user) => {
    acc[user._id.toString()] = user;
    return acc;
  }, {} as Record<string, User>);

  return ids.map((i) => lookup[i]);
};

export const createUserLoader = () => new DataLoader<string, User>(batchUsers);
