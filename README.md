# Backend III - CoderHouse

## Mocks API => Node.js + Express

Proyecto final del curso backend III de CoderHouse. Se implementa una API REST que genera usuarios y mascotas mocks mediante la libreria Facker.
Se utiliza persistencia en MongoDB

Endpoints disponibles:

- `/api/mocks/mockingusers`
- `/api/mocks/generateData`
- `/api/users`
- `/api/pets`

Documentacion de API mediante Swagger

- `/api/docs`

Test funcionales mediante Mocha + Chai + Supertest

npm run test

# 🐳 Docker Image - Backend III Coder House

## Descargar y Ejecutar

**https://hub.docker.com/r/fanro87/backend_3_coder**

### Pull de la imagen

```bash
docker pull fanro87/backend_3_coder:latest
```

### Ejecutar la imagen

```bash
docker run -d -p 8080:8080 fanro87/backend_3_coder:latest
```

---
