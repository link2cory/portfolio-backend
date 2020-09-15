import { IncomingMessage } from "http";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient, User } from "@prisma/client";

export const hashPassword = (password: string) => bcrypt.hashSync(password, 3);

export const getTokenFromUser = (user: User) => ({
  token: jwt.sign(user, process.env.SECRET_KEY),
});

const isUser = (input: any): input is User => (input as User).email !== undefined;

const decodeToken = (token: string): User | null => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return isUser(decoded) ? decoded : null;
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

// req.req.headers.authorization.replace("Bearer ", "") || null;

// export const verifyUserCredentials = async (
// user: User,
// prisma: PrismaClient,
// ) => {
// const persistedUser = await prisma.user.findOne({
// where: { email: user.email },
// });
//
// return persistedUser
// ? bcrypt.compareSync(user.password, persistedUser.password)
// ? persistedUser
// : null
// : null;
// };

const verifyUserExists = async (user: User, prisma: PrismaClient) => {
  const persistedUser = await prisma.user.findOne({
    where: { email: user.email },
  });

  return persistedUser;
};

const getUserFromToken = (token: string, prisma: PrismaClient) => {
  const user = decodeToken(token);
  if (user) {
    return verifyUserExists(user, prisma);
  }
  return null;
};

export const getUserFromRequest = (
  req: IncomingMessage,
  prisma: PrismaClient,
) => {
  const token = getTokenFromAuthHeader(req);
  if (token) {
    const user = getUserFromToken(token, prisma);
    return user;
  }
  return null;
};
