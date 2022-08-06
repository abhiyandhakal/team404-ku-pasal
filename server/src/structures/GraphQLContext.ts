import DataLoader from "dataloader";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { User } from "../model/User";
import { Product } from "../model/Product";
import { ISession } from "./ISession";

export type GraphQLContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { data: ISession };
    ip: string;
    headers: Record<string, string>;
  };
  res: Response;
  redis: Redis;
  userLoader: DataLoader<string, User, string>;
  productLoader: DataLoader<string, Product, string>;
};
