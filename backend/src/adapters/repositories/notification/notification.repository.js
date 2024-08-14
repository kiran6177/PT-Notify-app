import { NotificationModel } from "../../database/index.js";
class NotificationRepository {
  async createNotification() {
    throw new Error("createNotification not implemented!!");
  }
  async updateNotification() {
    throw new Error("updateNotification not implemented!!");
  }
  async getNotifications() {
    throw new Error("getNotifications not implemented!!");
  }
}

export class MongoNotificationRepository extends NotificationRepository {
  async createNotification(data) {
    try {
      return await NotificationModel.create(data);
    } catch (err) {
      const error = new Error();
      error.statusCode = 500;
      error.reasons = [err.message];
      throw error;
    }
  }
  async updateNotification(id, data) {
    try {
      return await NotificationModel.findByIdAndUpdate(
        { _id: id },
        { $set: data },
        { new: true }
      );
    } catch (err) {
      const error = new Error();
      error.statusCode = 500;
      error.reasons = [err.message];
      throw error;
    }
  }
  async getNotifications() {
    try {
      return await NotificationModel.find().sort({createdAt:-1});
    } catch (err) {
      const error = new Error();
      error.statusCode = 500;
      error.reasons = [err.message];
      throw error;
    }
  }
}
