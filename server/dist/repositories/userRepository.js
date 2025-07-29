"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = insertUser;
exports.findUserByEmail = findUserByEmail;
const database_1 = require("../database");
const createError_1 = __importDefault(require("../utils/createError"));
async function insertUser(user) {
    try {
        const pool = await (0, database_1.connect)();
        const sql = "INSERT INTO usuarios (name, email, password_hash) VALUES ($1, $2, $3)";
        const values = [user.name, user.email, user.password_hash];
        await pool.query(sql, values);
    }
    catch (error) {
        throw (0, createError_1.default)("Erro ao inserir usuário", 500);
    }
}
async function findUserByEmail(email) {
    try {
        const pool = await (0, database_1.connect)();
        const sql = "SELECT * FROM usuarios WHERE email = $1";
        const res = await pool.query(sql, [email]);
        return res.rows[0];
    }
    catch (error) {
        throw (0, createError_1.default)("Erro ao buscar usuário", 500);
    }
}
