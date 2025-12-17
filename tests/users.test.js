import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Users API', () => {
  it('GET /api/users → debe retornar todos los usuarios con sus respectivas propiedades', async () => {
    const res = await request(app).get('/api/users');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    // validar que cada usuario tenga las propiedades correctas
    res.body.forEach((user) => {
      expect(user).to.have.property('first_name').that.is.a('string');
      expect(user).to.have.property('last_name').that.is.a('string');
      expect(user).to.have.property('email').that.is.a('string');
      expect(user).to.have.property('password').that.is.a('string');
      expect(user).to.have.property('role').that.is.a('string');
    });
  });
});
