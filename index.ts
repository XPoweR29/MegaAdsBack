import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { handleError, ValidationError } from './utils/errors';
import rateLimit from 'express-rate-limit';
import { adRouter } from './routes/ad.router';
import { config } from './config/config';

const app = express();

app.use(cors({
    origin: config.crosOrigin,
}));
app.use(express.json());
app.use(rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
}))

app.use('/api/ad', adRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
});