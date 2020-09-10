import path from "path";

import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";

import * as types from "./types";

const schema = makeSchema({
  types,
  plugins: [nexusSchemaPrisma()],
  outputs: {
    schema: path.join(__dirname, "./../schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },
  // typegenAutoConfig: {
  // sources: [
  // {
  // alias: "faces",
  // source: path.join(process.cwd(), "src", "interfaces.ts"),
  // typeMatch: (type) => new RegExp(`(${type}Interface)`),
  // },
  // ],
  // backingTypeMap: {
  // URL: "URL",
  // },
  // debug: true,
  // },
});

export default schema;
