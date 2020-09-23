import { extendType } from "@nexus/schema";

export const addUserCrudToQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.user();
  },
});

export const addMeToQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: "User",
      resolve: (_root, _args, { user }) => user,
    });
  },
});
