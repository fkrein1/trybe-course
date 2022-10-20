import express from 'express';
import 'express-async-errors';
import frameRouter from './routes/frame';

const app = express();
app.use(frameRouter);
app.use(express.json());

export default app;
