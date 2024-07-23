import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

// Configure environment variables
dotenv.config();

// Database configuration
connectDB();

const app = express();

// Middlewares
app.use(cors()); // Ensure cors is invoked as a function
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to E-commerce App</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white);
});
