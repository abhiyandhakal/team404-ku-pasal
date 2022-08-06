import { IGeo } from "./src/structures/IGeo";

declare global {
  namespace Express {
    interface Request {
      /**
       * Geographical information about user.
       */
      geo: IGeo;

      /**
       * Request header in object.
       */
      headers: Record<string, string>;
    }
  }
}
