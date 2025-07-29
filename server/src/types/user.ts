
// Dados que vêm do front no cadastro
export interface UserInput {
  name: string;
  email: string;
  password: string;
}

// Estrutura do usuário no banco
export interface UserFromDB {
  name: string;
  email: string;
  password_hash: string;
}


// Payload do JWT
import { JwtPayload } from 'jsonwebtoken';

export interface JwtUserPayload extends JwtPayload {
  id: number;
  email: string;
}