import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Mocks API', () => {
  it('GET /api/mocks/mockingusers → debe generar 50 usuarios', async () => {
    const res = await request(app).get('/api/mocks/mockingusers');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array').with.length(50);
  });
});
