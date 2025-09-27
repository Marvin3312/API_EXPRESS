const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const swaggerUi = require('swagger-ui-express');
const openapiSpecification = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Rutas
app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/pedidos', require('./routes/pedidos'));

// Redirigir a la documentación de la API
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Swagger documentation is available at http://localhost:${port}/api-docs`);
    console.log(`Access it directly at http://localhost:${port}`);
});
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});
