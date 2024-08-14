import env from '../../config/envConfig.js';
import { createTransport } from 'nodemailer';
import mailgun from 'nodemailer-mailgun-transport';

export class MailgunService{
    constructor(){
        this.auth = {
            auth:{
                api_key : env.MAILGUN_KEY,
                domain : env.MAILGUN_DOMAIN
            }
        }
    }
    getConfig(){
        const transport = createTransport(mailgun(this.auth))
        return transport
    }
}