import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import todoRoutes from './routes/todo-routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Todo routes
app.use('/api', todoRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
