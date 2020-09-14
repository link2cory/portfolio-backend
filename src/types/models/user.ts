import { inputObjectType, objectType } from "@nexus/schema";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.name();
    t.model.email();
  },
});

export const UserToken = objectType({
  name: "UserToken",
  definition(t) {
    t.string("token");
  },
});

// normally it is not necessary to create an inputObjectType
// for standard crud, but I think this is needed in order to
// avoid making the password queryable.  There might be a more
// idiomatic way of doing this though.
export const UserCreateInput = inputObjectType({
  name: "UserCreateInput",
  definition(t) {
    t.string("name");
    t.string("email", { required: true });
    t.string("password", { required: true });
  },
});

// export const UserLoginInput = inputObjectType({
// name: "UserLoginInput",
// definition(t) {
// t.string("email", { required: true });
// t.string("password", { required: true });
// },
// });
export default User;
