# Backend III - CoderHouse 🚀

Proyecto final del curso **Backend III de CoderHouse**. API REST que genera usuarios y mascotas mocks mediante la librería Faker, con persistencia en MongoDB.

---

## ✨ Características

- ✅ API REST con Node.js + Express
- ✅ Generación de datos mock con Faker
- ✅ Persistencia en MongoDB
- ✅ Documentación automática con Swagger
- ✅ Tests funcionales con Mocha + Chai + Supertest
- ✅ Containerizado con Docker

---

## 📦 Requisitos

- Node.js 20+
- npm
- MongoDB (local o Atlas)
- Docker (opcional)

---

## 🔧 Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/fanro/backend_III_coder_house
   cd backend_III_coder_house
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   Edita el archivo `.env` con tus credenciales de MongoDB

---

## 📚 Scripts Disponibles

```bash
# Iniciar servidor
npm start

# Ejecutar tests
npm test

# Modo desarrollo con nodemon
npm run dev
```

---

## Endpoints disponibles:

- `/api/mocks/mockingusers`
- `/api/mocks/generateData`
- `/api/users`
- `/api/pets`

---

## 🧪 Testing

Ejecutar los tests:

```bash
npm test
```

Los tests incluyen:

- Tests unitarios con Chai
- Tests de integración con Supertest
- Cobertura de endpoints principales

---

## 📖 Documentación

Swagger UI disponible en:

```
http://localhost:8080/api/docs
```

---

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
