import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import errorHandler from './middleware/errorHandler';

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, 
}


app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', apiRouter);

// Middleware global de erro — sempre por último
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
