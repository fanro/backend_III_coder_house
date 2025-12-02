import { Router } from 'express';
import { mockController } from '../controllers/mock.controller.js';

const router = Router();

router.get('/mockingusers', mockController.getMockingUsers);

export default router;
