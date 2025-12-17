import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

const router = Router();

router.get('/', userController.getUsers);

router.delete('/all', userController.deleteAllUsers);

export default router;
