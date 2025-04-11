import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactsRouter from './routes/contacts.routes.js';

const server = express();

let port = Number(process.env.PORT) || 4000;

server.set('port', port);

const corsOptions = {
    origin: process.env.URL_FRONTEND || 'http://localhost:3000',
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(cors(corsOptions));
server.use('/technicalTest', express.json({ limit: process.env.LIMIT_SIZE || '1mb' }));
server.use('/technicalTest', bodyParser.urlencoded({ extended: true }));

//routers
server.use('/technicalTest', contactsRouter);

export default server;
