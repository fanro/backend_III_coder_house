import { PetService } from '../services/pet.service.js';

export const petController = {
  getPets: async (req, res) => {
    try {
      const pets = await PetService.getPets();
      res.json(pets);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },
};
