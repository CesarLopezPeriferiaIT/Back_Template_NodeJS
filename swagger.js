const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Back Template NodeJS API',
      version: '1.0.0',
      description: 'Documentación de endpoints',
    },
  },
  apis: ['./index.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
