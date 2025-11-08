import { logger } from "../config/logger.js";

export const errorHandler = (err, req, res, next) => {
  logger.error(`${err.message} - ${req.method} ${req.originalUrl}`);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};
