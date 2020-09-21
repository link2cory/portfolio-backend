import { objectType } from "@nexus/schema";

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.model.name();
    t.model.tagline();
    t.model.email();
    t.model.objective();
    t.model.github();
    t.model.website();
    t.model.jobs();
  },
});
