import path from "path";

import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";

import * as userSchema from "./user";
import * as bioSchema from "./bio";
import * as jobSchema from "./job";
import * as companySchema from "./company";

export default makeSchema({
  types: [userSchema, bioSchema, jobSchema, companySchema],
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: path.join(__dirname, "./../../schema.graphql"),
    typegen: path.join(__dirname, "./../generated/nexus.ts"),
  },
});
