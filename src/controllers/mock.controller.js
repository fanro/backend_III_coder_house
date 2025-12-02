import { MockService } from '../services/mocks.service.js';

export const mockController = {
  getMockingUsers: async (req, res) => {
    try {
      const users = await MockService.mockingUsers();
      res.json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },
};
