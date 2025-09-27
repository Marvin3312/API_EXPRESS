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
            {
                url: process.env.RENDER_URL || 'http://localhost:3000'
            }
        ],
        components: {
            schemas: {
                Cartelera: {
                    type: 'object',
                    properties: {
                        imdbID: { type: 'string', example: '80000' },
                        Title: { type: 'string', example: 'Titanes del Atlantico' },
                        Year: { type: 'string', example: '2013' },
                        Type: { type: 'string', example: 'Ciencia Ficcion' },
                        Poster: { type: 'string', example: 'https://demo/demoimages.png' },
                        Estado: { type: 'boolean', example: true },
                        description: { type: 'string', example: 'La humanidad se transforma en robots gigantes para defender la costa este de los monstruos que surgen del fondo del mar.' },
                        Ubication: { type: 'string', example: 'POPCINEMA' }
                    }
                }
            }
        }
    },
    apis: [path.join(__dirname, 'routes/cartelera.js')],
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = openapiSpecification;