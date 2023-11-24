import { User } from "./user.interface";
import UserModel from "./user.model";

const getUsers = async () => {
  return await UserModel.find();
};

const getUserById = async (userId: string) => {
  return await UserModel.findOne({ userId });
};

const createUser = async (userData: User) => {
  return await UserModel.create(userData);
};

export const UserServices = {
  getUsers,
  getUserById,
  createUser,
};