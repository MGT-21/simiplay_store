"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepository_1 = require("../repositories/userRepository");
const createError_1 = __importDefault(require("../utils/createError"));
async function register(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const existingUser = await (0, userRepository_1.findUserByEmail)(email);
        if (existingUser) {
            return next((0, createError_1.default)("Usuario já cadastrado", 400));
        }
        const password_hashed = await bcrypt_1.default.hash(password, 10);
        const user = { name, email, password_hash: password_hashed };
        await (0, userRepository_1.insertUser)(user);
        res.status(201).json({ message: "Usuário cadastrado com sucesso" });
    }
    catch (error) {
        next((0, createError_1.default)("Erro no cadastro", 500));
    }
}
async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const userDB = await (0, userRepository_1.findUserByEmail)(email);
        if (!userDB) {
            return next((0, createError_1.default)("Usuário não encontrado", 401));
        }
        const passwordCompare = await bcrypt_1.default.compare(password, userDB.password_hash);
        if (!passwordCompare) {
            return next((0, createError_1.default)("Senha incorreta", 401));
        }
        const token = jsonwebtoken_1.default.sign({ id: userDB.id, email: userDB.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ message: "Login bem-sucedido" });
    }
    catch (error) {
        next((0, createError_1.default)("Erro no login", 401));
    }
}
