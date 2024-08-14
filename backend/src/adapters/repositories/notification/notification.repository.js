import { NotificationModel } from '../../database/index.js'
class NotificationRepository{
    async createNotification(){
        throw new Error('createNotification not implemented!!')
    }
}

export class MongoNotificationRepository extends NotificationRepository{
    async createNotification(data){
        try {
            return await NotificationModel.create(data)
        } catch (err) {
            const error = new Error();
            error.statusCode = 500;
            error.reasons = [err.message]
            throw error
        }
    } 
}