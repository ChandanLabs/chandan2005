import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  EMAIL_SERVICE: process.env.EMAIL_SERVICE,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS
};
