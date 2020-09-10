import { queryType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: "Bio",
      resolve: (_parent, _args, ctx) => ctx.prisma.bio.findOne({ where: { id: 1 } }),
    });
  },
});

export default Query;
