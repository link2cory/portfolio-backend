import { extendType } from "@nexus/schema";

export const addJobCrudToMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneJob();
    t.crud.updateOneJob();
  },
});

