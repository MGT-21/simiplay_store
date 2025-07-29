import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  status?: number;
}

export default function errorHandler(error: AppError, req: Request, res: Response, next: NextFunction) {
    console.error(`[${new Date().toISOString()}]`, error);
    res.status(error.status || 500).json({
        error: error.message || 'Erro interno do servidor'
    });
}