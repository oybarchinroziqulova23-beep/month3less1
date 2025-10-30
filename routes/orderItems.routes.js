import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { validate } from '../middleware/validation.js';
import { orderItemValidate, orderItemUpdate } from '../validations/orderItem.js';
import { orderItemController } from '../controllers/orderItems.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager', 'staff']), orderItemController.getAll);
router.get('/:id', authGuard, roleGuard(['admin', 'manager', 'staff']), orderItemController.getOne);
router.post('/', authGuard, roleGuard(['staff']), validate(orderItemValidate), orderItemController.createOne);
router.put('/:id', authGuard, roleGuard(['staff']), validate(orderItemUpdate), orderItemController.updateOne);
router.delete('/:id', authGuard, roleGuard(['admin', 'manager']), orderItemController.deleteOne);

export { router as orderItemRouter };

