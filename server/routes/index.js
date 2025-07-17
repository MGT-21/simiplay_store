const express = require('express');
const createError = require('../utils/createError');

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');


const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);


router.get('/', (req, res) => {
  res.json({ message: 'API funcionando' });
});

router.use((req, res, next) => {
  next(createError('Endereço não encontrado', 400));
});

module.exports = router;