import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtUserPayload } from '../types/user'
import createError from '../utils/createError';

export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return next(createError("Token não fornecido", 401));

    jwt.verify(token, process.env.JWT_SECRET as string, (error, decoded) => {
        if (error) return next(createError("Token inválido", 403));

        req.user = decoded as JwtUserPayload;
        next();
    });
}