import { queryType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.crud.bio();
  },
});

export default Query;
