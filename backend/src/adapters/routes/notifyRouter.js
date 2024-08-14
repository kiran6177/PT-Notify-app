import express from 'express';
import { GetNotificationController, SendNotificationController } from '../controllers/index.js';
import dependencies from '../../frameworks/dependencies.js';
const notifyRouter = express.Router();

const controllers = {
    sendNotificationController : new SendNotificationController(dependencies),
    getNotificationsController : new GetNotificationController(dependencies)
}

notifyRouter.post('/send-notification',(req,res,next)=>{controllers.sendNotificationController.sendNotification(req,res,next)})
notifyRouter.get('/get-notifications',(req,res,next)=>{controllers.getNotificationsController.getNotification(req,res,next)})


export default notifyRouter