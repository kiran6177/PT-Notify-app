import express from "express";
import cors from "cors";
import notifyRouter from "../adapters/routes/notifyRouter.js";
import { ErrorHandler } from "../adapters/middlewares/error.handler.js";

export default () => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(express.json());

  app.use("/api/", notifyRouter);

  app.use(ErrorHandler.handleError);

  return app;
};
