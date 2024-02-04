import express from 'express';
import path from 'path';
import dotenv from 'dotenv'
import cors from 'cors'
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

import connectDB from './Config/db.js'
import userRoutes from './Routes/user.route.js'
import authRoutes from './Routes/auth.route.js'
import contactRoutes from './Routes/contact.route.js'
import postRoutes from './Routes/post.route.js'
import projectRoutes from './Routes/project.route.js'


dotenv.config()

const app = express();

app.use(express.json())
app.use(cookieParser())

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

console.log('FRONTEND_URL:', process.env.FRONTEND_URL);


app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/post', postRoutes)
app.use('/api/project', projectRoutes)

//Middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error"

  res.status(statusCode).json({
    success: false,
    message: message,
    statusCode: statusCode
  })
})

const PORT = 3000;

const startServer = async () => {
  await connectDB()
  app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));
};

startServer();
