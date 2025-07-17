const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes'); // está pegando o index.js automaticamente
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

// Middleware global de erro — sempre por último
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
