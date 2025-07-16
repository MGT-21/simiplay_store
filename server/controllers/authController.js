const bcrypt = require('bcrypt');
const userRepository = require("../repositories/userRepository");

async function register(req, res) {
  const { name, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10)

  const user = { name, email, password: passwordHash };

  // Checa se usuário já existe
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ error: "Usuário já cadastrado" });
  }

  // Insere usuário
  try {
    await userRepository.insertUser(user);
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    res.status(500).json({ error: "Erro no cadastro" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const userDB = await userRepository.findUserByEmail(email);

  if (!userDB) {
    return res.status(401).send("Usuário não encontrado" );
  }

  const passwordCompare = await bcrypt.compare(password, userDB.password_hash)

  if(!passwordCompare) {
    return res.status(401).send("Senha incorreta");
  }

  res.status(200).json({ message: "Login bem-sucedido"});
}

module.exports = {
  register,
  login,
};