import { queryType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.crud.bio();

    t.field("me", {
      type: "User",
      resolve: (_parent, _args, { user }) => user,
    });
  },
});

export default Query;
