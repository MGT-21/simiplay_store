const { Pool } = require("pg");
const createError = require("../utils/createError");

let pool;

async function connect() {
  if (pool) return pool;

  try{
    pool = new Pool({
      connectionString: process.env.CONNECTION_STRING,
    });
  
    // Testa a conexão
    const client = await pool.connect();
    console.log("Criou o pool de conexão");
  
    const res = await client.query("SELECT now()");
    console.log("Hora do banco:", res.rows[0]);
  
    client.release();
  
    return pool;
  } catch (err) {
    throw createError("Erro ao conectar ao banco de dados", 500);
  }
}

module.exports = { connect };