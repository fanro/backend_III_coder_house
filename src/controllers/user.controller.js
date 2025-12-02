import { UserService } from '../services/user.service.js';

export const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },
};
