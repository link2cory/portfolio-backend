import { extendType } from "@nexus/schema";

export const addBioCrudToMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneBio();
    t.crud.updateOneBio();
  },
});
