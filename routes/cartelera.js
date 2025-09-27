const express = require('express');
const router = express.Router();
const carteleraController = require('../controllers/carteleraController');

router.get('/', carteleraController.getAllCartelera);

/**
 * @swagger
 * /api/cartelera:
 *   get:
 *     summary: Obtener todas las películas disponibles
 *     responses:
 *       200:
 *         description: Lista de películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cartelera'
 *       500:
 *         description: Error interno del servidor
 */

module.exports = router;
