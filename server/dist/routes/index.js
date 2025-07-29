"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createError_1 = __importDefault(require("../utils/createError"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const router = express_1.default.Router();
router.use('/auth', authRoutes_1.default);
router.use('/users', userRoutes_1.default);
router.get('/', (req, res) => {
    res.json({ message: 'API funcionando' });
});
router.use((req, res, next) => {
    next((0, createError_1.default)('Endereço não encontrado', 400));
});
exports.default = router;
