import { MailgunService } from "./mailgun.service.js";
import { SESService } from "./ses.service.js";

const TIMER_CONFIG = {
  3: 1 * 60 * 1000,//1 MINUTE
  2: 5 * 60 * 1000,//5 MIN (2 MIN FOR DEVELOPMENT)
  1: 15 * 60 * 1000,//15 MIN (3 MIN FOR DEVELOPMENT)
};

export class EmailService {
  constructor(dependencies) {
    this.notificationRepository =
      new dependencies.Repositories.MongoNotificationRepository();
    this.sesService = new SESService();
    this.mailgunService = new MailgunService();
  }

  async sendEmail(notification) {
    try {
      let retryCount = 3;
      const updateNotification =
        await this.notificationRepository.updateNotification(
          notification?._id,
          { status: "PENDING" }
        );
      console.log(updateNotification);
      const mailer = async () => {
        let transporter;
        const assignTransporter =  () => {
          if (retryCount > 0) {
            return this.sesService.getConfig();
          } else if (retryCount === 0) {
            console.log("RETRIED 3 TIMES");
            return this.mailgunService.getConfig();
          } else {
            return null;
          }
        };
        transporter = assignTransporter();
        if (transporter) {
          transporter
            .sendMail({
              from: "kir4ns6177@gmail.com",
              to: notification?.reciever_details,
              subject: "NOTIFICATION TEST",
              text: notification?.content,
            })
            .then(async (info) => {
              await this.notificationRepository.updateNotification(
                notification?._id,
                { status: "SENT" }
              );
              console.log("SUCCESS", info);
            })
            .catch(async (err) => {
              console.log("ERROR", err);
              await this.notificationRepository.updateNotification(
                notification?._id,
                { status: "FAILED" }
              );
              console.log(retryCount, TIMER_CONFIG[retryCount]);
              setTimeout(mailer, TIMER_CONFIG[retryCount]);
              await this.notificationRepository.updateNotification(
                notification?._id,
                { status: "RETRYING" }
              );
              retryCount -= 1;
            });
        } else {
          await this.notificationRepository.updateNotification(
            notification?._id,
            { status: "DEAD" }
          );
          console.log("RETRY END");
        }
      };
      mailer();
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
