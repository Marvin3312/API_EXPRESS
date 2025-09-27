const { getPool } = require('../db');
const sql = require('mssql');

const Pedido = {
    async findAll() {
        const pool = getPool();
        const result = await pool.request().query('SELECT * FROM Pedidos3900');
        return result.recordset;
    },

    async findById(id) {
        const pool = getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Pedidos3900 WHERE ID_Pedido = @id');
        return result.recordset[0];
    }
};

module.exports = Pedido;
