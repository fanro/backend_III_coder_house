export const swaggerSpecs = {
  openapi: '3.0.1',
  info: {
    title: 'Backend III - Proyecto Final - API Mocks',
    version: '1.0.0',
    description:
      'API para la generación de datos mock de usuarios y mascotas, así como la gestión de los mismos.',
  },

  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Local server',
    },
  ],

  tags: [
    { name: 'Mocks', description: 'Generación de usuarios y mascotas mock' },
    { name: 'Users', description: 'Operaciones sobre usuarios' },
    { name: 'Pets', description: 'Operaciones sobre mascotas' },
  ],

  paths: {
    /* ------------------------------------------------------
     * Mocks
     * ------------------------------------------------------ */
    '/api/mocks/mockingusers': {
      get: {
        tags: ['Mocks'],
        summary: 'Genera 50 usuarios mock',
        responses: {
          200: {
            description: 'Usuarios generados correctamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    users: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/User' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    '/api/mocks/generateData': {
      post: {
        tags: ['Mocks'],
        summary: 'Genera usuarios y mascotas e inserta en la base de datos',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  users: { type: 'integer', example: 5 },
                  pets: { type: 'integer', example: 3 },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Datos insertados correctamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    insertedUsers: { type: 'integer' },
                    insertedPets: { type: 'integer' },
                  },
                },
              },
            },
          },
        },
      },
    },

    /* ------------------------------------------------------
     * Users
     * ------------------------------------------------------ */
    '/api/users': {
      get: {
        tags: ['Users'],
        summary: 'Obtiene todos los usuarios',
        responses: {
          200: {
            description: 'Lista de usuarios',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    users: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/User' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    /* ------------------------------------------------------
     * Pets
     * ------------------------------------------------------ */
    '/api/pets': {
      get: {
        tags: ['Pets'],
        summary: 'Obtiene todas las mascotas',
        responses: {
          200: {
            description: 'Lista de mascotas',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    pets: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/PetPopulated' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------
   * Schemas
   * ------------------------------------------------------ */
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          first_name: { type: 'string', example: 'Juan' },
          last_name: { type: 'string', example: 'Gonzalez' },
          email: { type: 'string', example: 'juan@mail.com' },
          role: {
            type: 'string',
            enum: ['user', 'admin'],
            example: 'user',
          },
          password: { type: 'string' },
          pets: { type: 'array', items: { type: 'string' } },
        },
      },

      Pet: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'Teodoro' },
          type: { type: 'string', example: 'cat' },
          species: { type: 'string', example: 'Naranja' },
          age: { type: 'integer', example: 3 },
        },
      },

      PetPopulated: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          name: { type: 'string', example: 'Rocco' },
          type: { type: 'string', example: 'dog' },
          species: { type: 'string', example: 'Golden Retriever' },
          owner: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              first_name: { type: 'string' },
              last_name: { type: 'string' },
              email: { type: 'string' },
            },
          },
        },
      },
    },
  },
};
