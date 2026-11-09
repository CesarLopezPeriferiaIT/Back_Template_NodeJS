const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /:
 *   get:
 *     summary: Devuelve un saludo de prueba
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hola Mundo
 */
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
