import env from "../../config/envConfig.js";
import aws from "@aws-sdk/client-ses";
import { createTransport } from "nodemailer";
import { defaultProvider } from "@aws-sdk/credential-provider-node";

export class SESService {
  constructor() {
    this.ses = new aws.SES({ region: env.REGION, defaultProvider });
  }
  getConfig() {
    const REGION = env.REGION;
    const ACCESS_KEY = env.AWS_ACCESS_KEY_ID;
    const SECRET_ACCESS_KEY = env.AWS_SECRET_ACCESS_KEY;

    const transport = createTransport({
      SES: { ses: this.ses, aws },
    });

    return transport;
  }
}
