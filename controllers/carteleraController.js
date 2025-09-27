const Cartelera = require('../models/carteleraModel');

const carteleraController = {
    async getAllCartelera(req, res) {
        try {
            const cartelera = await Cartelera.findAll();
            res.json(cartelera);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                codError: '500',
                msgRespuesta: 'Error interno del servidor'
            });
        }
    }
};

module.exports = carteleraController;
