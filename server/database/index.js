const { Pool } = require("pg");

let pool;

async function connect() {
  if (pool) return pool;

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
}

module.exports = { connect };