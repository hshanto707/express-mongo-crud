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

const updateUser = async (userId: number, updatedData: User) => {
  return await UserModel.findOneAndUpdate({ userId }, updatedData, { new: true, runValidators: true });
};

const deleteUser = async (userId: string) => {
  return await UserModel.findOneAndDelete({ userId });
};

export const UserServices = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
