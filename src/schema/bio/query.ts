import { extendType } from "@nexus/schema";

export const addBioCrudToQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("username", {
      type: "Bio",
      resolve() {
        return { name: "cory" };
      },
    });
    // t.crud.bio();
  },
});
