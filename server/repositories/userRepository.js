const { connect } = require("../database");

async function insertUser(user) {
  const pool = await connect();
  const sql = "INSERT INTO clientes (nome, email, senha) VALUES ($1, $2, $3)";
  const values = [user.name, user.email, user.password];
  await pool.query(sql, values);
}

async function findUserByEmail(email) {
  const pool = await connect();
  const sql = "SELECT * FROM clientes WHERE email = $1";
  const res = await pool.query(sql, [email]);
  return res.rows[0];
}

module.exports = {
  insertUser,
  findUserByEmail,
};