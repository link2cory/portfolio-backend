import { extendType } from "@nexus/schema";

export const addCompanyCrudToMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCompany();
    t.crud.updateOneCompany();
  },
});

