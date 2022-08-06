import { Redis } from "ioredis";
import { v4 } from "uuid";
import {
  __VERIFY_EMAIL_PREFIX__,
  __VERIFY_EMAIL_TICKET_PREFIX__,
} from "../constants";
import { User } from "../model/User";
import { UserResolverError } from "../structures/ErrorTypes";
import mailTransporter from "./mailTransporter";

/**
 * Sends email verification to the user email address.
 * @param user {User} User object
 * @param redis {Redis} Redis store client
 */
export const sendEmailVerificationMail = async (user: User, redis: Redis) => {
  const isThereTicket = await redis.get(
    __VERIFY_EMAIL_TICKET_PREFIX__ + user.id
  );

  if (isThereTicket) {
    throw new UserResolverError(
      "User aldready have requested email verification mail.",
      "ALREADY_EMAIL_VERIFICATION_REQUESTED",
      [
        {
          field: "email",
          message: "User has already reqeusted email verification",
          expiresIn: JSON.parse(isThereTicket).expiresIn,
        },
      ]
    );
  }

  // Generates random uuid ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const token = v4();

  // Adds the verification token in redis client mapping it with user id
  await redis.set(
    __VERIFY_EMAIL_PREFIX__ + token,
    user.id,
    "ex",
    1000 * 60 * 60 // 1 hour
  );

  const mailOptions = {
    from: "Anichan <noreply@anicastapp.ga>",
    to: `${user.username} <${user.email}>`,
    subject: "[KU Mart] Verify your Email to activate your account.",
    html: `<html><head> <title></title> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <style type="text/css"> #outlook a{padding: 0;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;}.ExternalClass *{line-height: 100%;}body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}p{display: block; margin: 13px 0;}</style> <style type="text/css"> @media only screen and (max-width: 480px){@-ms-viewport{width: 320px;}@viewport{width: 320px;}}</style> <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"/> <link href="https://ui-cdn-anichan.lon1.anicastapp.ga/attachments/6872822342252447744/style.css" rel="stylesheet" type="text/css"/> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700); @import url(https://ui-cdn-anichan.lon1.anicastapp.ga/attachments/6872822342252447744/style.css); </style> <style type="text/css"> @media only screen and (min-width: 480px){.mj-column-per-100, * [aria-labelledby="mj-column-per-100"]{width: 100% !important;}}</style></head><body style="background: #f9f9f9"> <div style="background-color: #f9f9f9"> <style type="text/css"> html, body, *{-webkit-text-size-adjust: none; text-size-adjust: none;}a{color: #1eb0f4; text-decoration: none;}a:hover{text-decoration: underline;}</style> <div style="margin: 0px auto; max-width: 640px; background: transparent"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size: 0px; width: 100%; background: transparent" align="center" border="0"> <tbody> <tr> <td style=" text-align: center; vertical-align: top; direction: ltr; font-size: 0px; padding: 40px 0px; "> <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style=" vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%; "> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style=" word-break: break-word; font-size: 0px; padding: 0px; " align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0px" align="center" border="0"> <tbody> <tr> <td style="width: 138px"> <a href="#" target="_blank"><img alt="" title="" height="38px" src="https://ui-cdn-anichan.lon1.anicastapp.ga/attachments/6872826544181635072/ardwl4h054bxd6buuylounfkv28c6ljq.png" style=" border: none; display: block; outline: none; text-decoration: none; width: 100%; height: 38px; " width="138"/></a> </td></tr></tbody> </table> </td></tr></tbody> </table> </div></td></tr></tbody> </table> </div><div style=" max-width: 640px; margin: 0 auto; box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); border-radius: 4px; overflow: hidden; "> <div style=" margin: 0px auto; max-width: 640px; background: #ffffff top center / cover no-repeat; "> <table role="presentation" cellpadding="0" cellspacing="0" style=" font-size: 0px; width: 100%; background: #ffffff top center / cover no-repeat; " align="center" border="0"> <tbody> <tr> <td style=" text-align: center; vertical-align: top; direction: ltr; font-size: 0px; "> <div style=" cursor: auto; color: white; font-family: Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; font-size: 36px; font-weight: 600; line-height: 60px; text-align: center; "> </div></td></tr></tbody> </table> </div><div style="margin: 0px auto; max-width: 640px; background: #ffffff"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size: 0px; width: 100%; background: #ffffff" align="center" border="0"> <tbody> <tr> <td style=" text-align: center; vertical-align: top; direction: ltr; font-size: 0px; padding: 40px 70px; "> <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style=" vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%; "> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style=" word-break: break-word; font-size: 0px; padding: 0px 0px 20px; " align="left"> <div style=" cursor: auto; color: #737f8d; font-family: Whitney Book Regular, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; font-size: 16px; line-height: 24px; text-align: left; "> <p> <img src="https://ui-cdn-anichan.lon1.anicastapp.ga/attachments/6872819177921036288/a3ju3ppjymfa8l9ua6qs6zlfpjy8li0g.gif" alt="Party Girl" title="Party Girl" width="500" style="height: auto"/> </p><h2 style=" font-family: Whitney Semibold Regular, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; font-weight: 500; font-size: 20px; color: #4f545c; letter-spacing: 0.27px; "> Hiya ${
      user.username
    }, </h2> <p> Yayyy! Thanks for registering an account! </p><p> Before we get started you, we'll need to verify your email. You've 1 hour to verify your email. </p><p> If you did not request this, just ignore this email and no further action will be taken. </p></div></td></tr><tr> <td style=" word-break: break-word; font-size: 0px; padding: 10px 25px; " align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate" align="center" border="0"> <tbody> <tr> <td style=" border: none; border-radius: 3px; color: white; cursor: auto; padding: 15px 19px; " align="center" valign="middle" bgcolor="#f197d6"> <a href="${
      process.env.APP_URI + token
    }" style=" text-decoration: none; line-height: 100%; background: #f197d6; color: white; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 15px; font-weight: normal; text-transform: none; margin: 0px; " target="_blank"> Verify Your Email </a> </td></tr></tbody> </table> </td></tr><tr> <td style=" word-break: break-word; font-size: 0px; padding: 30px 0px; "> <p style=" font-size: 1px; margin: 0px auto; border-top: 1px solid #dcddde; width: 100%; "> </p></td></tr><td style=" word-break: break-word; font-size: 0px; padding: 0px; " align="left"> <div style=" cursor: auto; color: #747f8d; font-family: Whitney Medium, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; font-size: 13px; line-height: 16px; text-align: left; "> <p> Need help with something? <a href="https://discord.gg/test" style=" font-family: Whitney Medium, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; color: #5865f2; ">Contact us</a> or hit us up on Twitter <a href="https://twitter.com/anichan_me" style=" font-family: Whitney Medium, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; color: #5865f2; ">@anichan_me</a>.<br/> Want to give us feedback? Let us know what you think on our <a href="https://feedback.anicastapp.ga" style=" font-family: Whitney Medium, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; color: #5865f2; ">feedback site</a>. </p></div></td></tbody> </table> </div></td></tr></tbody> </table> </div></div><div style="margin: 0px auto; max-width: 640px; background: transparent"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size: 0px; width: 100%; background: transparent" align="center" border="0"> <tbody> <tr> <td style=" text-align: center; vertical-align: top; direction: ltr; font-size: 0px; padding: 0px; "> <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style=" vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%; "> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-break: break-word; font-size: 0px"> <div style="font-size: 1px; line-height: 12px"> &nbsp; </div></td></tr></tbody> </table> </div></td></tr></tbody> </table> </div><div style=" margin: 0 auto; max-width: 640px; background: #ffffff; box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); border-radius: 4px; overflow: hidden; "> <table cellpadding="0" cellspacing="0" style="font-size: 0px; width: 100%; background: #ffffff" align="center" border="0"> <tbody> <tr> <td style=" text-align: center; vertical-align: top; font-size: 0px; padding: 0px; "> </td></tr></tbody> </table> </div><div style="margin: 0px auto; max-width: 640px; background: transparent"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size: 0px; width: 100%; background: transparent" align="center" border="0"> <tbody> <tr> <td style=" text-align: center; vertical-align: top; direction: ltr; font-size: 0px; padding: 20px 0px; "> <div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style=" vertical-align: top; display: inline-block; direction: ltr; font-size: 13px; text-align: left; width: 100%; "> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style=" word-break: break-word; font-size: 0px; padding: 0px; " align="center"> <div style=" cursor: auto; color: #99aab5; font-family: Whitney Semibold Regular, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; font-size: 12px; line-height: 24px; text-align: center; "> Sent by Anichan • <a href="https://anichan.me" style="color: #f592dc; text-decoration: none" target="_blank">check our website</a> • <a href="https://twitter.com/anichan_me" style="color: #f592dc; text-decoration: none" target="_blank">@anichan_me</a> </div></td></tr></tbody> </table> </div></td></tr></tbody> </table> </div></div></body></html>`,
  };

  mailTransporter.sendMail(mailOptions, (err) => {
    if (err) {
      throw new UserResolverError(
        "Failed while send the email verification mail.",
        "FAILED_SENDING_EMAIL_VERIFICATION_MAIL",
        [
          {
            field: "email",
            message: "Failed while send the email verification mail.",
          },
        ]
      );
    }
  });

  const ticket = v4();
  redis.setex(
    __VERIFY_EMAIL_TICKET_PREFIX__ + user.id,
    5 * 60 /* 5min */,
    JSON.stringify({
      ticketID: ticket,
      expiresIn: new Date(Date.now() + 5 * 60 * 1000 /* Adding 5 Mins */),
    })
  );

  return true;
};
