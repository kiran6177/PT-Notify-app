import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notifyRouter from '../adapters/routes/notifyRouter.js';
import { ErrorHandler } from '../adapters/middlewares/error.handler.js';

dotenv.config()

export default () =>{
    const app = express();

    app.use(express.json());
    
    app.use('/api/',notifyRouter)

    app.use(ErrorHandler.handleError)

    return app
}