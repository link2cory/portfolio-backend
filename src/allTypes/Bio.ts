import { objectType } from "@nexus/schema";

const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name");
    t.string("tagline");
    t.string("email");
    t.string("objective");
    t.url("github", (bio) => new URL(bio.github));
    t.url("website", (bio) => new URL(bio.website));
  },
});

export default Bio;
