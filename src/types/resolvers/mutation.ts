import { mutationType, stringArg } from "@nexus/schema";
import bcrypt from "bcrypt";
import { getTokenFromUser } from "../../auth";

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneBio();
    t.crud.updateOneBio();

    t.crud.createOneUser({
      computedInputs: {
        password: ({ args }) => bcrypt.hashSync(args.data.password, 3),
      },
    });

    t.field("createUser", {
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

    // t.field("login", {
    // type: "User",
    // resolve(_parent, args, ctx) {
    // const {
    // data: { email, password },
    // } = args;
    // },
    // });
  },
});

export default Mutation;
