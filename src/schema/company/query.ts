import { extendType } from "@nexus/schema";

export const addCompanyCrudToQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.company();
  },
});
