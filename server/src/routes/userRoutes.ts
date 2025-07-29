import express from 'express';
import { authenticateToken }from '../middleware/authenticateToken';
import createError from '../utils/createError';

const router = express.Router();

router.use(authenticateToken); // todas rotas aqui são protegidas

router.get('/profile', (req, res, next) => {
  try {
    if (!req.user) {
      return next(createError("Usuário não autenticado", 401));
    }
    res.json({
      message: `Bem-vindo, ${req.user.email}`,
      user: req.user,
    });
  } catch (error) {
    next(createError('Erro ao buscar perfil', 500));
  }
});

export default router;