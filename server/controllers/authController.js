const userRepository = require("../repositories/userRepository");

async function register(req, res) {
  const { name, email, password } = req.body;

  // Checa se usuário já existe
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ error: "Usuário já cadastrado" });
  }

  // Insere usuário
  try {
    await userRepository.insertUser({ name, email, password });
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    res.status(500).json({ error: "Erro no cadastro" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await userRepository.findUserByEmail(email);

  if (!user || user.password_hash !== password) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  res.status(200).json({ message: "Login bem-sucedido"});
}

module.exports = {
  register,
  login,
};