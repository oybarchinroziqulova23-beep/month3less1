import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { validate } from '../middleware/validation.js';
import { orderItemValidate, orderItemUpdate } from '../validations/orderItems.js';
import { orderItemsController } from '../controllers/orderItems.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager', 'staff']), orderItemsController.getAll);
router.get('/:id', authGuard, roleGuard(['admin', 'manager', 'staff']), orderItemsController.getOne);
router.post('/', authGuard, roleGuard(['staff']), validate(orderItemValidate), orderItemsController.createOne);
router.put('/:id', authGuard, roleGuard(['staff']), validate(orderItemUpdate), orderItemsController.updateOne);
router.delete('/:id', authGuard, roleGuard(['admin', 'manager']), orderItemsController.deleteOne);

export { router as orderItemRouter };

