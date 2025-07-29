import { connect } from '../database';
import createError from '../utils/createError';

import { UserFromDB } from '../types/user'

export async function insertUser(user: UserFromDB): Promise<void> {
  try{
    const pool = await connect();
    const sql = "INSERT INTO usuarios (name, email, password_hash) VALUES ($1, $2, $3)";
    const values = [user.name, user.email, user.password_hash];
    await pool.query(sql, values);
  }catch(error) {
    throw createError("Erro ao inserir usuário",500);
  }
}

export async function findUserByEmail(email: string) {
  try{
    const pool = await connect();
    const sql = "SELECT * FROM usuarios WHERE email = $1";
    const res = await pool.query(sql, [email]);
    return res.rows[0];
  } catch (error) {
    throw createError("Erro ao buscar usuário",500);
  }
}