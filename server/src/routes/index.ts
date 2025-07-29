import express from 'express';
import createError from '../utils/createError';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';


const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);


router.get('/', (req, res) => {
  res.json({ message: 'API funcionando' });
});

router.use((req, res, next) => {
  next(createError('Endereço não encontrado', 400));
});

export default router;