import * as nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: Number(process.env.EMAIL_HOST_PORT),
  auth: {
    user: process.env.EMAIL_AUTH_USERNAME as string,
    pass: process.env.EMAIL_AUTH_PASSWORD as string,
  },
});

export default mailTransporter;
