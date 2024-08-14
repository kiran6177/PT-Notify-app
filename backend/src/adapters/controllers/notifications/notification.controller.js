export class SendNotification {
  constructor(dependencies) {
    this.notficationSendUseCase = new dependencies.UseCases.NotficationSend(
      dependencies
    );
  }

  async sendNotification(req, res, next) {
    try {
      const resultData = await this.notficationSendUseCase.execute(req.body);
      res.status(200).json(resultData);
    } catch (error) {
      next(error);
    }
  }
}
