const bcrypt = require('bcrypt');
const userRepository = require("../repositories/userRepository");
const createError = require("../utils/createError");
const jwt = require('jsonwebtoken');

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const password_hashed = await bcrypt.hash(password, 10)

    const user = { name, email, password_hash: password_hashed };

    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
      return next(createError("Usuário já cadastrado", 400));
    }

    await userRepository.insertUser(user);
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error("Erro no login", error);
    next(createError("Erro no cadastro", 500));
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const userDB = await userRepository.findUserByEmail(email);

    if (!userDB) {
      return next(createError("Usuário não encontrado", 401));
    }
    
    const passwordCompare = await bcrypt.compare(password, userDB.password_hash)

    if (!passwordCompare) {
      return next(createError("Senha incorreta", 401));
    }

    const token = jwt.sign(
      { id: userDB.id, email: userDB.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({ message: "Login bem-sucedido" });
    return res.json({ token })
  } catch (error) {
    next(createError("Erro no login", 401))
  }

}

module.exports = {
  register,
  login,
};