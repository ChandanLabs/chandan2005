import nodemailer from "nodemailer";
import { config } from "../config/env.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
      service: config.EMAIL_SERVICE,
      auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: config.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message
    });

    res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    next(err);
  }
};
