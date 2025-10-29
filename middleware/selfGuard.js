import { ApiError } from '../helper/errorMessage.js';

/**
 * Foydalanuvchi faqat o'z ma'lumotiga ruxsat beruvchi middleware
 * @param {string} fieldName - modeldagi foydalanuvchi bilan bog'liq maydon nomi (masalan: "customer_id" yoki "user_id")
 */
export function selfGuard(fieldName = 'user_id') {
  return async (req, res, next) => {
    try {
      // Agar foydalanuvchi admin bo'lsa — ruxsat beramiz
      if (req.user.role === 'admin') {
        return next();
      }

      // Foydalanuvchi o'ziga tegishli ma'lumotni ko'ryaptimi — tekshiramiz
      const resourceOwnerId =
        req.body[fieldName] ||
        req.params[fieldName] ||
        req.query[fieldName] ||
        null;

      if (!resourceOwnerId) {
        return next(new ApiError(400, `Missing field: ${fieldName}`));
      }

      // Agar token foydalanuvchining ID si bilan ma'lumot egasi ID si mos bo'lsa
      if (resourceOwnerId.toString() === req.user.id.toString()) {
        return next();
      }

      // Aks holda ruxsat berilmaydi
      return next(new ApiError(403, 'You do not have permission to modify this resource.'));
    } catch (error) {
      return next(new ApiError(500, 'SelfGuard check failed.'));
    }
  };
}
