const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

router.post("/register", authController.register);
router.post("/login", authController.login);

// Aqui você pode adicionar rotas de produtos, pedidos, etc.

module.exports = router;