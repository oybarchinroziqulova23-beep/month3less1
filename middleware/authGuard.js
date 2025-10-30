import { verifyToken } from '../helper/jwt.js';
import { config } from '../config/index.js';
import { AppError } from '../helper/errorMessage.js';

export async function authGuard(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new AppError(401, 'Authorization token required!'));
    }

    const token = authHeader.split(' ')[1];

    const decoded = verifyToken(token, config.jwt.accessSecret);

    req.user = decoded;

    next();
  } catch (error) {
    return next(new AppError(401, 'Invalid or expired token!'));
  }
}
