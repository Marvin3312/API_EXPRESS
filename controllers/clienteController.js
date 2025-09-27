const Cliente = require('../models/clienteModel');

const clienteController = {
    async getAllClientes(req, res) {
        try {
            const clientes = await Cliente.findAll();
            res.json(clientes);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },

    async getClienteById(req, res) {
        try {
            const cliente = await Cliente.findById(req.params.id);
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente not found' });
            }
            res.json(cliente);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    }
};

module.exports = clienteController;
