import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Pets API', () => {
  it('GET /api/pets → debe retornar todas las mascotas con sus respectivas propiedades', async () => {
    const res = await request(app).get('/api/pets');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    // validar que cada mascota tenga las propiedades correctas
    res.body.forEach((pet) => {
      expect(pet).to.have.property('name').that.is.a('string');
      expect(pet).to.have.property('species').that.is.a('string');
      expect(pet).to.have.property('age').that.is.a('number');
      expect(pet).to.have.property('type').that.is.a('string');
    });
  });
});
