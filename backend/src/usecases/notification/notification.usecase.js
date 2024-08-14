export class NotficationSend{
    constructor(dependencies){
        this.notificationRepository = new dependencies.Repositories.MongoNotificationRepository();
    }

    async execute({reciever,content,channel}){
        try {
            console.log(reciever,content,channel);
            if(!reciever || !content || !channel){
                throw new Error('Invalid inputs');
            }
            switch(channel){
                case 'EMAIL' :
                    //write implementation for EMAIL
                    return channel
                case 'SMS' :
                    //write implementation for SMS
                    throw new Error('SMS not implemented');
                case 'PUSH' :
                    //write implementation for PUSH NOTIFCATION
                    throw new Error('PUSH NOTIFCATION not implemented');
                default:
                    throw new Error('PUNSUPPORTEED channel',channel);
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }
}