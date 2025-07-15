require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});