import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('/', UserControllers.getUsers);

router.get('/:userId', UserControllers.getUserById);

router.post('/', UserControllers.createUser);

export const UserRoutes = router;
