import UserModel from "./user.model";

const getUsers = async () => {
  return await UserModel.find();
};

export const UserServices = {
  getUsers,
};