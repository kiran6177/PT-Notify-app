import env from '../../config/envConfig.js';

export class MailgunService{
    static getConfig(){
        const API_KEY = env.MAILGUN_KEY;
        const DOMAIN = env.MAILGUN_DOMAIN;

        return {
            type: 'mailgun',
            apiKey: API_KEY,
            domainName: DOMAIN
          }
    }
}