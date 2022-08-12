import { AuthChecker } from "type-graphql";
import { GraphQLContext } from "../structures/GraphQLContext";
import { UserModel } from "../model";

export const adminAuthChecker: AuthChecker<GraphQLContext> = async ({
  context,
}) => {
  const { req } = context;
  if (!req.session.data) {
    // The provided session doesnot exist, or there is no session cookie set.
    return false;
  }

  const user = await UserModel.findOne({ id: req.session.data.id });

  if (!user) {
    // The user with that session id doesnot exist. Maybe user was deleted.
    return false;
  }

  if (!user.isAdmin) {
    return false;
  }

  return true; // or false if access is denied
};
