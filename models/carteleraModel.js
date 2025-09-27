const { getPool } = require('../db');
const sql = require('mssql');

const Cartelera = {
    async findAll() {
        const pool = getPool();
        const result = await pool.request().query('SELECT * FROM dbo.peliculaMarvin3900');
        return result.recordset;
    }
};

module.exports = Cartelera;
