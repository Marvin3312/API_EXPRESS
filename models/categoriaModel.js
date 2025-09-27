const { getPool } = require('../db');
const sql = require('mssql');

const Categoria = {
    async findAll() {
        const pool = getPool();
        const result = await pool.request().query('SELECT * FROM Categoria3900');
        return result.recordset;
    },

    async findById(id) {
        const pool = getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Categoria3900 WHERE ID_Categoria = @id');
        return result.recordset[0];
    }
};

module.exports = Categoria;
