require('dotenv').config();
const sql = require('mssql');

const dbConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT, 10),
    options: {
        encrypt: false,              // ⚠️ ponlo en true solo si usas Azure
        trustServerCertificate: true // para local/self-signed
    }
};

let pool;

const connectDB = async () => {
    try {
        if (pool) return pool;

        pool = await sql.connect(dbConfig);
        console.log('✅ Connected to SQL Server');
        return pool;
    } catch (err) {
        console.error('❌ Database connection failed:');
        console.error('Message:', err.message);
        console.error('Stack:', err.stack);
        throw err; // relanza para capturarlo en index.js
    }
};

const getPool = () => {
    if (!pool) {
        throw new Error('Database not connected');
    }
    return pool;
};

module.exports = { connectDB, getPool };
