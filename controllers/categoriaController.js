const Categoria = require('../models/categoriaModel');

const categoriaController = {
    async getAllCategorias(req, res) {
        try {
            const categorias = await Categoria.findAll();
            res.json(categorias);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },

    async getCategoriaById(req, res) {
        try {
            const categoria = await Categoria.findById(req.params.id);
            if (!categoria) {
                return res.status(404).json({ message: 'Categoria not found' });
            }
            res.json(categoria);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    }
};

module.exports = categoriaController;
