export class NotificationGet {
  constructor(dependencies) {
    this.notificationRepository =
      new dependencies.Repositories.MongoNotificationRepository();
  }

  async execute() {
    try {
      const notifications =
        await this.notificationRepository.getNotifications();
      return notifications;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
