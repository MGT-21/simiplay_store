require("dotenv").config();
const { Pool } = require("pg");
const createError = require("../utils/createError");

let pool;

async function connect() {
  if (pool) return pool;

  try {
    pool = new Pool({
      connectionString: process.env.CONNECTION_STRING,
    });

    const client = await pool.connect();

    const res = await client.query("SELECT now()");
    console.log("Hora do banco:", res.rows[0]);

    client.release();

    return pool;
  } catch (error) {
    throw createError("Erro ao conectar ao banco de dados", 500);
  }
}

module.exports = { connect };