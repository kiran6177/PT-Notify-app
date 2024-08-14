export class ErrorHandler {
  static handleError(err, req, res, next) {
    console.log(err);
    res
      .status(err?.message ? 400 : 500)
      .json({ error: err?.message || "Internal Server Error!!" });
  }
}
