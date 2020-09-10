import { decorateType } from "@nexus/schema";
import { GraphQLURL } from "graphql-scalars";

export const GQLURL = decorateType(GraphQLURL, {
  rootTyping: "URL",
  asNexusMethod: "url",
});

export { default as Query } from "./Query";
export { default as Bio } from "./Bio";
