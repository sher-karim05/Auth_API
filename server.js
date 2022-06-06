import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan'
import connectDB from './config/db.js'

// //Routes
import AuthRoutes from './routes/AuthRoutes.js';
import PostRoutes from './routes/PostRoutes.js';

//MIDDLEWARE AUTH
import verifyToken from './middleware/Auth.js';
const app = express();

dotenv.config()

connectDB()

app.use(express.json())
app.use(cors())
app.use(morgan())

// //ROUTE AUTH
app.use('/api', AuthRoutes)

//ROUTES POSTS PRIVATE
app.use('/api', verifyToken, PostRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, (console.log(`Server is listening on port: http://localhost:${PORT}`)))