import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('/', UserControllers.getUsers);

router.get('/:userId', UserControllers.getUserById);

router.post('/', UserControllers.createUser);

router.put('/:userId', UserControllers.updateUser);

export const UserRoutes = router;
