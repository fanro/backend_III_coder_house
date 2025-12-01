import { Router } from 'express';
import { faker } from '@faker-js/faker';

const router = Router();

router.get('/mockingusers', (req, res) => {
  const users = Array.from({ length: 10 }).map(() => ({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['user', 'admin']),
  }));
  res.json(users);
});

export default router;
