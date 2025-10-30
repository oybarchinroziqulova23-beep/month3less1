import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { validate } from '../middleware/validation.js';
import { districtValidate, districtUpdate } from '../validations/district.js';
import { districtController } from '../controllers/district.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager', 'staff']), districtController.getAll);
router.get('/:id', authGuard, roleGuard(['admin', 'manager', 'staff']), districtController.getOne);
router.post('/', authGuard, roleGuard(['admin']), validate(districtValidate), districtController.createOne);
router.put('/:id', authGuard, roleGuard(['admin']), validate(districtUpdate), districtController.updateOne);
router.delete('/:id', authGuard, roleGuard(['admin']), districtController.deleteOne);

export { router as districtRouter };
