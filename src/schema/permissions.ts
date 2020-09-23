import { shield, rule } from "graphql-shield";

const isAuthenticated = rule({ cache: "contextual" })(
  async (_parent, _args, ctx) => ctx.user !== null,
);

const isBioOwner = rule({ cache: "contextual" })(
  async (_parent, { where }, { prisma, user }) => {
    // get the user based on the resource in question
    const { userId: resourceOwnerId } = await prisma.bio.findOne({
      where,
      select: { userId: true },
    });

    // is the user the same as the one provided by context?
    return resourceOwnerId === user.id;
  },
);

const isJobOwner = rule({ cache: "contextual" })(
  // where.id is guarenteed to exist on updateOneBio
  async (_parent, { where }, { prisma, user }) => {
    // get the resource owner
    // is nested destructuring with an alias hard to read?
    const {
      profile: { userId: resourceOwnerId },
    } = await prisma.job.findOne({
      where,
      select: {
        profile: { select: { userId: true } },
      },
    });
    return resourceOwnerId === user.id;
  },
);

// There should be a generic way to determine the resourceOwner
// but it seems pretty tricky.  The first thought would be
// to make some sort of resourceOwner resolver for each type
// of resource, determine the resource type, and then call
// the appropriate resource resolver.  Am I just reimplementing
// graphql at this point though?
// const isResourceOwner = rule({ cache: "no_cache" })(
// async (_parent, _args, _ctx) => true,
// );

export default shield(
  {
    Query: {
      jobs: isAuthenticated,
      job: isAuthenticated,
    },
    Mutation: {
      createOneJob: isAuthenticated,
      updateOneJob: isJobOwner,
      createOneBio: isAuthenticated,
      updateOneBio: isBioOwner,
      createOneCompany: isAuthenticated,
    },
  },
  {
    debug: process.env.NODE_ENV === "development",
  },
);
