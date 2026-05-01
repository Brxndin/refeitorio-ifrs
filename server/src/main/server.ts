import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cardapioRoutes from './routes/cardapio-routes.ts';

const server = express();

server.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

server.use(helmet());
server.use(express.json());

const normalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    message: 'Muitas requisições realizadas. Tente novamente em 15 minutos.',
});

server.use('/cardapios', normalLimiter, cardapioRoutes);

export { server };
