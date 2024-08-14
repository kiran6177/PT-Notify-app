export class Notification{
    constructor(data){
        this.channel = data.channel
        this.reciever_details = data.reciever_details
        this.content = data.content
        this.channel_type = data.channel_type
        this.status = data.status
        this.createdAt = data.createdAt
    }
}