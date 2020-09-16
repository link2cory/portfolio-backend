import { PrismaClient, User } from "@prisma/client";
import type { APIGatewayProxyEvent } from "aws-lambda";

// import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
// import { APIGatewayProxyEvent as LambdaContext } from "aws-lambda";

// import { getUserFromRequest } from "./auth";

const prisma = new PrismaClient();

export interface Context {
  incomingContext: APIGatewayProxyEvent;
  prisma: PrismaClient;
  // user: User | null;
}

export async function createContext(
  incomingContext: APIGatewayProxyEvent,
): Promise<Context> {
  return {
    incomingContext,
    prisma,
    // user: await getUserFromRequest(incomingContext, prisma),
  };
}
