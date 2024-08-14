import { Notification } from "../../entities/notification.entity.js";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export class NotficationSend {
  constructor(dependencies) {
    this.notificationRepository =
      new dependencies.Repositories.MongoNotificationRepository();
    this.emailService = new dependencies.Services.EmailService(dependencies);
  }

  async execute({ reciever, content, channel }) {
    try {
      console.log(reciever, content, channel);
      if (!reciever || !content || !channel) {
        throw new Error("Invalid inputs");
      }

      switch (channel) {
        case "EMAIL":
          if (!EMAIL_REGEX.test(reciever)) {
            throw new Error("Invalid Email Format!!");
          }
          const data = {
            channel: "EMAIL",
            reciever_details: reciever,
            content,
            channel_type: "SES",
            status: "INITIAL",
            createdAt: new Date(),
          };
          const notification = new Notification(data);
          const saveNotification =
            await this.notificationRepository.createNotification(notification);
          console.log(saveNotification);
          return await this.emailService.sendEmail(saveNotification.toObject());
        case "SMS":
          //write implementation for SMS
          throw new Error("SMS not implemented");
        case "PUSH":
          //write implementation for PUSH NOTIFCATION
          throw new Error("PUSH NOTIFCATION not implemented");
        default:
          throw new Error("UNSUPPORTEED channel", channel);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
