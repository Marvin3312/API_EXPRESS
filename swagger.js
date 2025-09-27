const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Ejemplo',
            version: '1.0.0',
            description: 'Una API de ejemplo para el parcial de Desarrollo Web',
        },
        servers: [
            { url: 'http://localhost:3000' },
        ],
        components: {
            schemas: {
                Categoria: {
                    type: 'object',
                    properties: {
                        ID_Categoria: { type: 'integer', example: 1 },
                        Nombre: { type: 'string', example: 'Bebidas' },
                        Descripcion: { type: 'string', example: 'Categoría de bebidas' }
                    }
                },
                Cliente: {
                    type: 'object',
                    properties: {
                        ID_Cliente: { type: 'integer', example: 1 },
                        Nombre: { type: 'string', example: 'Juan Pérez' },
                        Email: { type: 'string', example: 'juan@mail.com' }
                    }
                },
                Pedido: {
                    type: 'object',
                    properties: {
                        ID_Pedido: { type: 'integer', example: 1 },
                        Fecha: { type: 'string', format: 'date-time', example: '2025-09-27T10:00:00Z' },
                        ID_Cliente: { type: 'integer', example: 1 },
                        Total: { type: 'number', example: 250.50 }
                    }
                }
            }
        }
    },
    apis: [path.join(__dirname, 'routes/*.js')],
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = openapiSpecification;
