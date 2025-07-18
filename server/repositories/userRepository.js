const { connect } = require("../database");
const createError = require("../utils/createError");

async function insertUser(user) {
  try{
    const pool = await connect();
    const sql = "INSERT INTO usuarios (name, email, password_hash) VALUES ($1, $2, $3)";
    const values = [user.name, user.email, user.password_hash];
    await pool.query(sql, values);
  }catch(error) {
    throw createError("Erro ao inserir usuário",500);
  }
}

async function findUserByEmail(email) {
  try{
    console.log("tentando conectar ou banco...")
    const pool = await connect();
    console.log("Conexão estabelecida", !!pool)

    const sql = "SELECT * FROM usuarios WHERE email = $1";
    console.log("Executando query:", sql, "com email:", email);

    const res = await pool.query(sql, [email]);
    console.log("Query executada, resultados:", res.rows);

    return res.rows[0];
  } catch (error) {
    console.error("Erro em findUserByEmail:", error);
    throw createError("Erro ao buscar usuário",500);
  }
}

module.exports = {
  insertUser,
  findUserByEmail,
};