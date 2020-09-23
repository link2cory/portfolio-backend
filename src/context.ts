import { PrismaClient } from "@prisma/client";

import type { APIGatewayProxyEvent } from "aws-lambda";
// import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

import { getUserFromRequest, DecodedUserToken } from "./auth";

const prisma = new PrismaClient();

export interface Context {
  incomingContext: APIGatewayProxyEvent;
  prisma: PrismaClient;
  user: DecodedUserToken | null;
}

export async function createContext(
  incomingContext: APIGatewayProxyEvent,
): Promise<Context> {
  return {
    incomingContext,
    prisma,
    user: await getUserFromRequest(incomingContext, prisma),
  };
}
