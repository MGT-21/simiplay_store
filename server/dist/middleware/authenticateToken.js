"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createError_1 = __importDefault(require("../utils/createError"));
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return next((0, createError_1.default)("Token não fornecido", 401));
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error)
            return next((0, createError_1.default)("Token inválido", 403));
        req.user = decoded;
        next();
    });
}
