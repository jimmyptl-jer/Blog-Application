import express from 'express';
import path from 'path';
import dotenv from 'dotenv'
import cors from 'cors'
import { fileURLToPath } from 'url';


import connectDB from './Config/db';

dotenv.config()

const app = express();

// Get the current module's directory using import.meta.url
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
)

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/dist') })
})

const PORT = 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));
};

startServer();