import { mutationField, stringArg } from "@nexus/schema";
import bcrypt from "bcrypt";
import { getTokenFromUser } from "../../auth";

export const createOneUser = mutationField("createOneUser", {
  type: "UserToken",
  args: {
    email: stringArg(),
    password: stringArg(),
  },
  resolve: async (_parent, { email, password }, { prisma, request }) => {
    const hashedPassword = bcrypt.hashSync(password, 3);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return getTokenFromUser(user);
  },
});
