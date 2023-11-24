import { Order, User } from "./user.interface";
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

const addOrder = async (userId: number, orderData: Order): Promise<void> => {
  const user = await UserModel.findOne({ userId });

  if (!user) {
    throw new Error('User not found!');
  }

  if (!user.orders) {
    user.orders = [];
  }

  user.orders.push(orderData);
  await user.save();
}

export const UserServices = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addOrder,
};
