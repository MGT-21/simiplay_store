"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticateToken_1 = require("../middleware/authenticateToken");
const createError_1 = __importDefault(require("../utils/createError"));
const router = express_1.default.Router();
router.use(authenticateToken_1.authenticateToken); // todas rotas aqui são protegidas
router.get('/profile', (req, res, next) => {
    try {
        if (!req.user) {
            return next((0, createError_1.default)("Usuário não autenticado", 401));
        }
        res.json({
            message: `Bem-vindo, ${req.user.email}`,
            user: req.user,
        });
    }
    catch (error) {
        next((0, createError_1.default)('Erro ao buscar perfil', 500));
    }
});
exports.default = router;
