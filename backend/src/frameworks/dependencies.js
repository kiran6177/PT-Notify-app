import { MongoNotificationRepository } from "../adapters/repositories/index.js"
import { NotficationSend, NotificationGet } from "../usecases/index.js";
import { EmailService } from "../usecases/services/email.service.js";

const Services = {
    EmailService
}

const Repositories = {
    MongoNotificationRepository
}

const UseCases = {
    NotficationSend,
    NotificationGet
}

export default {
    Repositories,
    UseCases,
    Services
}