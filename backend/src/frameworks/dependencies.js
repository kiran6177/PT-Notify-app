import { MongoNotificationRepository } from "../adapters/repositories/index.js"
import { NotficationSend } from "../usecases/index.js"

const Repositories = {
    MongoNotificationRepository
}

const UseCases = {
    NotficationSend
}

export default {
    Repositories,
    UseCases
}