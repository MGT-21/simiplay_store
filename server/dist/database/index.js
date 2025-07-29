"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = connect;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pg_1 = require("pg");
const createError_1 = __importDefault(require("../utils/createError"));
let pool = null;
async function connect() {
    if (pool)
        return pool;
    try {
        pool = new pg_1.Pool({
            connectionString: process.env.CONNECTION_STRING,
        });
        const client = await pool.connect();
        const res = await client.query("SELECT now()");
        console.log("Hora do banco:", res.rows[0]);
        client.release();
        return pool;
    }
    catch (error) {
        throw (0, createError_1.default)("Erro ao conectar ao banco de dados", 500);
    }
}
