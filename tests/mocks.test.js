import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Mocks API', () => {
  it('GET /api/mocks/mockingusers → debe generar 50 usuarios, no persiste', async () => {
    const res = await request(app).get('/api/mocks/mockingusers');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array').with.length(50);
  });

  it('POST /api/mocks/generateData → debe borrar usuarios y mascotas existentes antes de insertar nuevos datos', async () => {
    // borrar usuario y mascotas antes de la prueba
    const resDeleteUsers = await request(app).delete('/api/users/all');
    expect(resDeleteUsers.status).to.equal(200);
    expect(resDeleteUsers.body.success).to.be.true;
    expect(resDeleteUsers.body.message).to.equal(
      'Todos los usuarios han sido eliminados.'
    );

    const resDeletePets = await request(app).delete('/api/pets/all');

    expect(resDeletePets.status).to.equal(200);
    expect(resDeletePets.body.success).to.be.true;
    expect(resDeletePets.body.message).to.equal(
      'Todas las mascotas han sido eliminadas.'
    );

    const res = await request(app)
      .post('/api/mocks/generateData')
      .send({ users: 3, pets: 2 });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('usuarios');
    expect(res.body).to.have.property('mascotas');
    expect(res.body.usuarios).to.be.an('array').with.length(3);
    expect(res.body.mascotas).to.be.an('array').with.length(2);
  });
});
