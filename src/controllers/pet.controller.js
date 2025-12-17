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
  deleteAllPets: async (req, res) => {
    try {
      await PetService.deleteAllPets();
      res.json({
        success: true,
        message: 'Todas las mascotas han sido eliminadas.',
      });
    } catch (error) {
      console.error('Error al eliminar mascotas:', error);
      res.status(500).json({ error: 'Error al eliminar mascotas' });
    }
  },
};
