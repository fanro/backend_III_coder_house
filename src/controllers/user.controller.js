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
  deleteAllUsers: async (req, res) => {
    try {
      await UserService.deleteAllUsers();
      res.json({
        success: true,
        message: 'Todos los usuarios han sido eliminados.',
      });
    } catch (error) {
      console.error('Error al eliminar usuarios:', error);
      res.status(500).json({ error: 'Error al eliminar usuarios' });
    }
  },
};
