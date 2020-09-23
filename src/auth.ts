// import { IncomingMessage } from "http";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { APIGatewayProxyEvent as IncomingMessage } from "aws-lambda";
import { PrismaClient, User } from "@prisma/client";

export interface DecodedUserToken {
  id: number;
  email: string;
  name: string | null;
}

export const hashPassword = (password: string) => bcrypt.hashSync(password, 3);

export const getTokenFromUser = (user: DecodedUserToken) => ({
  token: jwt.sign(user, process.env.SECRET_KEY),
});

const isDecodedUserToken = (input: any): input is DecodedUserToken => (input as DecodedUserToken).email !== undefined;

const decodeToken = (token: string): DecodedUserToken | null => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return isDecodedUserToken(decoded) ? decoded : null;
  } catch (e) {
    return null;
  }
};

const getTokenFromAuthHeader = (req: IncomingMessage) => {
  if (req.headers.authorization) {
    return req.headers.authorization.replace("Bearer ", "");
  }
  return null;
};

const verifyPassword = (user: User, password: string) => bcrypt.compareSync(password, user.password);

const verifyUserExists = async (
  user: DecodedUserToken,
  prisma: PrismaClient,
) => {
  const existingUser = await prisma.user.findOne({
    where: { email: user.email },
  });
  return !!existingUser;
};

const convertDBUserToDecodedToken = (user: User): DecodedUserToken => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export const getUserFromRequest = async (
  req: IncomingMessage,
  prisma: PrismaClient,
) => {
  const token = getTokenFromAuthHeader(req);
  if (token) {
    const decodedUser = decodeToken(token);
    if (decodedUser) {
      if (verifyUserExists(decodedUser, prisma)) {
        return decodedUser;
      }
    }
  }
  return null;
};

export const getUserTokenFromCredentials = async (
  email: string,
  password: string,
  prisma: PrismaClient,
) => {
  // find the user by email
  const user = await prisma.user.findOne({ where: { email } });

  if (user && verifyPassword(user, password)) {
    const userToTokenize = convertDBUserToDecodedToken(user);
    const token = jwt.sign(userToTokenize, process.env.SECRET_KEY);
    return { token };
  }
  return { token: "" };
};
