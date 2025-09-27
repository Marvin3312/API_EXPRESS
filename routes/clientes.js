const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Retrieve a list of clients
 *     responses:
 *       200:
 *         description: A list of clients.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get('/', clienteController.getAllClientes);

/**
 * @swagger
 * /api/clientes/{id}:
 *   get:
 *     summary: Retrieve a single client by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the client to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single client.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Client not found
 */
router.get('/:id', clienteController.getClienteById);

module.exports = router;