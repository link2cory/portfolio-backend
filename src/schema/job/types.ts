import { objectType } from "@nexus/schema";

export const Job = objectType({
  name: "Job",
  definition(t) {
    t.model.role();
    t.model.roleDescription();
    t.model.startDate();
    t.model.endDate();
    t.model.profile();
    t.model.company();
  },
});
