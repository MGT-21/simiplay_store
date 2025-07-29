import dotenv from 'dotenv'
dotenv.config();

import { Pool } from 'pg';
import createError from '../utils/createError';

let pool: Pool | null = null;

export async function connect(): Promise<Pool> {
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