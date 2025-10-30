import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { validate } from '../middleware/validation.js';
import { staffValidate, staffUpdate } from '../validations/deliveryStaff.js';
import { deliveryStaffController } from '../controllers/deliveryStaff.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager']), deliveryStaffController.getAll);
router.get('/:id', authGuard, roleGuard(['admin', 'manager']), deliveryStaffController.getOne);
router.post('/', authGuard, roleGuard(['admin']), validate(staffValidate), deliveryStaffController.createOne);
router.put('/:id', authGuard, roleGuard(['admin', 'manager']), validate(staffUpdate), deliveryStaffController.updateOne);
router.delete('/:id', authGuard, roleGuard(['admin']), deliveryStaffController.deleteOne);

export { router as deliveryStaffRouter };
