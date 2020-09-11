import { mutationType } from "@nexus/schema";

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneBio();
    t.crud.updateOneBio();
  },
});

export default Mutation;
