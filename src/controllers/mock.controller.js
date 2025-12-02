import { MockService } from '../services/mocks.service.js';
import { UserService } from '../services/user.service.js';

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
  generateData: async (req, res) => {
    try {
      const { users = 0, pets = 0 } = req.body;

      if (!users || !pets || (users <= 0 && pets <= 0)) {
        return res.status(400).json({
          error:
            'Debe especificar una cantidad de usuarios o mascotas mayor a 0',
        });
      }

      const usersModel = await MockService.mockingUsers(users);
      const usuarios = await UserService.insertManyUsers(usersModel);

      res.json(usuarios);
    } catch (error) {
      console.error('Error al generar datos:', error);
      res.status(500).json({ error: 'Error al generar datos' });
    }
  },
};
