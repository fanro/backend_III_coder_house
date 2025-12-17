import { Router } from 'express';
import { petController } from '../controllers/pet.controller.js';

const router = Router();

router.get('/', petController.getPets);

router.delete('/all', petController.deleteAllPets);

export default router;
