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

export const UserControllers = {
  getUsers,
};