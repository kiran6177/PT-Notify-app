export class GetNotification{
    constructor(dependencies){
        this.notficationGetUseCase = new dependencies.UseCases.NotificationGet(dependencies)
    }

    async getNotification(req,res,next){
        try {
            const resultData = await this.notficationGetUseCase.execute(req.body);
            res.status(200).json(resultData)
        } catch (error) {
            next(error)
        }
    }
}