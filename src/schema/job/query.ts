import { extendType } from "@nexus/schema";

export const addJobCrudToQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.job();
    t.crud.jobs({
      filtering: true,
    });
  },
});

