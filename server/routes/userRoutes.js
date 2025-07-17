const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.use(authenticateToken); // todas rotas aqui são protegidas

router.get('/profile', (req, res, next) => {
  try {
    res.json({
      message: `Bem-vindo, ${req.user.email}`,
      user: req.user,
    });
  } catch (err) {
    next(createError('Erro ao buscar perfil', 500));
  }
});

module.exports = router;