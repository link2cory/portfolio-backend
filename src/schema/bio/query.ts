import { extendType } from "@nexus/schema";

export const addBioCrudToQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.bio();
  },
});

