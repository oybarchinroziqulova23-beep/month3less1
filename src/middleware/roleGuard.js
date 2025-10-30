import { AppError } from '../helper/errorMessage.js';

/**
 * Foydalanuvchi rolini tekshiruvchi middleware
 * @param {string | string[]} allowedRoles // ruxsat etilgan rollar (masalan: 'admin' yoki ['admin', 'staff'])
 */
export function roleGuard(allowedRoles) {
  return (req, res, next) => {
    try {
      const userRole = req.user?.role;

      // agar token orqali rol kelmagan bo'lsa
      if (!userRole) {
        return next(new AppError(403, 'User role not found in token!'));
      }

      // agar allowedRoles bitta string bo'lsa, uni arrayga aylantiramiz
      const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

      // tekshiruv
      if (!roles.includes(userRole)) {
        return next(new AppError(403, 'Access denied! Insufficient permissions.'));
      }

      // rol to'g'ri bo'lsa, davom etamiz
      next();
    } catch (error) {
      return next(new AppError(500, 'Role checking failed.'));
    }
  };
}
