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
  static async mockingPets(cantidad = 50) {
    const pets = Array.from({ length: cantidad }).map(() => ({
      name: faker.animal.dog(),
      type: faker.helpers.arrayElement(['dog', 'cat', 'bird', 'fish']),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 }),
    }));
    return pets;
  }
}
