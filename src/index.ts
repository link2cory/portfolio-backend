import { ApolloServer } from "apollo-server-lambda";
import { GraphQLSchema } from "graphql";

import { createContext } from "./context";
import schema from "./schema";

// if (schema instanceof GraphQLSchema) {
// console.log("it is!");
// }
const cors = {
  credentials: true,
  allowedHeaders: ["Authorization"],
  exposedHeaders: ["Authorization"],
};

const server = new ApolloServer({
  schema,
  context: createContext,
  playground: true,
  introspection: true,
});

export const handler = server.createHandler({ cors });
