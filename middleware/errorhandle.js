import { AppError } from "../helpers/error.Message.js";

export const notFound = (req, res, next) => {
  const error = new AppError(`URL topilmadi: ${req.originalUrl}`, 404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Serverda ichki xatolik yuz berdi";

  res.status(statusCode).json({
    success: false,
    status: err.status || "error",
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
