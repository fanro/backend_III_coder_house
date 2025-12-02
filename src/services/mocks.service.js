import { faker } from '@faker-js/faker';
import { generaHash } from '../utils/utils.js';

export class MockService {
  static async mockingUsers(cantidad = 50) {
    const encryptedPassword = generaHash('coder123');
    const users = Array.from({ length: cantidad }).map(() => ({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: encryptedPassword,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    }));
    return users;
  }
}
