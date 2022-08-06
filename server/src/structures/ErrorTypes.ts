/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError } from "apollo-server-express";

export class UserResolverError extends ApolloError {
  public code: string;
  public extensions: any;
  readonly name: string;

  /**
   * Return Errors when something went wrong.
   * @param {string} message Error Message. Eg. "User was not found."
   * @param {string} code Error Code. Eg. "USER_NOT_FOUND"
   * @param {any} extensions Extra error field for more error clarification. Eg.
   * ```ts
   *  [{
   *      	field: "email",
   *      	message: "Email is not valid."
   *  }]
   * ```
   */
  constructor(message: string, code?: string, extensions?: any) {
    super(message, code);
    this.extensions = { code, ...extensions };
    Object.defineProperty(this, "name", { value: "UserResolverError" });
  }

  toString() {
    return `${this.message} --- ${this.code}`;
  }
}

export class ProductResolverError extends ApolloError {
  public code: string;
  public extensions: any;
  readonly name: string;

  /**
   * Return Errors when something went wrong.
   * @param {string} message Error Message. Eg. "User was not found."
   * @param {string} code Error Code. Eg. "USER_NOT_FOUND"
   * @param {any} extensions Extra error field for more error clarification. Eg.
   * ```ts
   *  [{
   *      	field: "email",
   *      	message: "Email is not valid."
   *  }]
   * ```
   */
  constructor(message: string, code?: string, extensions?: any) {
    super(message, code);
    this.extensions = { code, ...extensions };
    Object.defineProperty(this, "name", { value: "ProductResolverError" });
  }

  toString() {
    return `${this.message} --- ${this.code}`;
  }
}
