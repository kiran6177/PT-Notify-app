import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notifyRouter from '../adapters/routes/notifyRouter.js';

dotenv.config()

export default () =>{
    const app = express();

    app.use(express.json());
    
    app.use('/api/',notifyRouter)



    return app
}