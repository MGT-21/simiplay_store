"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
function errorHandler(error, req, res, next) {
    console.error(`[${new Date().toISOString()}]`, error);
    res.status(error.status || 500).json({
        error: error.message || 'Erro interno do servidor'
    });
}
