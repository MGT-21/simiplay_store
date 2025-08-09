import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {insertUser, findUserByEmail} from '../repositories/userRepository';
import createError from '../utils/createError';

export async function register(req: Request, res:Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if(existingUser){
      return next(createError("Usuario já cadastrado", 400))
    }
    
    const password_hashed = await bcrypt.hash(password, 10)
    const user = { name, email, password_hash: password_hashed };

    await insertUser(user);
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    next(createError("Erro no cadastro", 500));
  }
}

export async function login(req: Request, res:Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    const userDB = await findUserByEmail(email);
    if (!userDB) {
      return next(createError("Usuário não encontrado", 401));
    }
    
    const passwordCompare = await bcrypt.compare(password, userDB.password_hash)
    if (!passwordCompare) {
      return next(createError("Senha incorreta", 401));
    }
    
    const token = jwt.sign(
      { id: userDB.id, name:userDB.name, email: userDB.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );

    res.status(200).json({ token,message: "Login bem-sucedido" });
  } catch (error) {
    next(createError("Erro no login", 401))
  }

}