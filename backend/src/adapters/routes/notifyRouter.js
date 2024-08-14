import express from 'express';
import { SendNotificationController } from '../controllers/index.js';
import dependencies from '../../frameworks/dependencies.js';
const notifyRouter = express.Router();

const controllers = {
    sendNotificationController : new SendNotificationController(dependencies)
}

notifyRouter.post('/send-notification',(req,res,next)=>{controllers.sendNotificationController.sendNotification(req,res,next)})

export default notifyRouter