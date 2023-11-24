import { Request, Response } from 'express';
import { UserServices } from './user.service';

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUsers();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.getUserById(userId);

    if (result)
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    else
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    const result = await UserServices.createUser(userData);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const { user: userData } = req.body;

    const updatedUser = await UserServices.updateUser(userId, userData);

    if (updatedUser) 
      res.json({
        success: true,
        message: 'User updated successfully!',
        data: updatedUser,
      });
    else
      res.status(404).json({
        success: false,
        message: 'User not found',
        data: null,
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    
    const result = await UserServices.deleteUser(userId);

    if (result)
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    else
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const addOrder = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const { order: orderData } = req.body;

    const order = await UserServices.addOrder(userId, orderData);

    if (order)
      res.json({
        success: true,
        message: 'Order created successfully!',
        data: null,
      });
    else
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
}

const getOrdersByUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const orders = await UserServices.getOrdersByUser(userId);

    if (orders)
      res.json({
        success: true,
        message: 'Orders fetched successfully!',
        data: {
          orders,
        },
      });
    else
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const UserControllers = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addOrder,
  getOrdersByUser,
};
