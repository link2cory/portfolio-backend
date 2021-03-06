import { objectType } from "@nexus/schema";

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    // t.string("name");
    t.model.name();
    t.model.tagline();
    t.model.email();
    t.model.objective();
    t.model.github();
    t.model.website();
    t.model.jobs();
    t.model.user();
  },
});
