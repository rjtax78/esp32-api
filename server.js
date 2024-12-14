import express from 'express'
import cors from 'cors'
import ledRoute from './routes/led.route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/led", ledRoute);

const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Le serveur est lancer en mode ${mode} sur le port ${PORT}`)
);
