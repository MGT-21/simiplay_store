const express = require("express");
const authController = require("../controllers/authController");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

//rota pública
router.post("/register", authController.register);
router.post("/login", authController.login);


//rota protegida (só acessa com token válido)
router.get("/profile", authenticateToken, (req, res) => { 
  res.json({
    message: `Bem-vindo, ${req.user.email}`,
    user: req.user,
  });
});

// Aqui você pode adicionar rotas de produtos, pedidos, etc.

module.exports = router;