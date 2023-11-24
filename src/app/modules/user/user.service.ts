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

const addOrder = async (userId: number, orderData: Order) => {
  const user = await UserModel.findOne({ userId });

  if (!user)
    return null;

  if (!user.orders) {
    user.orders = [];
  }

  user.orders.push(orderData);
  return await user.save();
}

const getOrdersByUser = async (userId: number) => {
  const user = await UserModel.findOne({ userId });

  if (!user)
    return null;

  return user.orders || null;
};

export const UserServices = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addOrder,
  getOrdersByUser,
};
