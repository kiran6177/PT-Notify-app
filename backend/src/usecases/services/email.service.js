export class EmailService{
    constructor(){

    }

    async sendEmail(content,reciever_email){
        try {
            console.log(content,reciever_email);
            return true
        } catch (error) {
            console.log(error);
        }
    }
}