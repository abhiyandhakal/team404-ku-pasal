import { Authority } from "../model/User";

export interface ISession {
  id: number;
  username: string;
  email: string;
  authority: Authority;
  ip: string;
  userAgent: string;
}
