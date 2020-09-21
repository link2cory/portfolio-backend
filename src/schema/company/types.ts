import { objectType } from "@nexus/schema";

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.model.name();
    t.model.description();
    t.model.website();
    t.model.logo();
  },
});
