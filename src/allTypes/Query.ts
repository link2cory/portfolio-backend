import { queryType } from "@nexus/schema";
import { data } from "../data";
import Bio from "./Bio";

const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });
  },
});

export default Query;
