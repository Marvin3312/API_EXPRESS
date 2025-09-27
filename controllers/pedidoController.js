const Pedido = require('../models/pedidoModel');

const pedidoController = {
    async getAllPedidos(req, res) {
        try {
            const pedidos = await Pedido.findAll();
            res.json(pedidos);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },

    async getPedidoById(req, res) {
        try {
            const pedido = await Pedido.findById(req.params.id);
            if (!pedido) {
                return res.status(404).json({ message: 'Pedido not found' });
            }
            res.json(pedido);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    }
};

module.exports = pedidoController;
