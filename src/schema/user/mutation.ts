import { arg, mutationField } from "@nexus/schema";
import { getTokenFromUser, hashPassword } from "../../auth";

export const createOneUser = mutationField("createOneUser", {
  type: "UserToken",
  args: {
    userData: arg({ type: "UserCreateInput", required: true }),
  },
  resolve: async (_root, { userData }, { prisma }) => {
    const user = await prisma.user.create({
      data: {
        ...userData,
        password: hashPassword(userData.password),
      },
    });
    return getTokenFromUser(user);
  },
});
