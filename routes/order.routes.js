import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { selfGuard } from '../middleware/selfGuard.js';
import { validate } from '../middleware/validation.js';
import { orderValidate, orderUpdate } from '../validations/order.js';
import { orderController } from '../controllers/order.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager', 'staff', 'customer']), orderController.getAll);
router.get('/:id', authGuard, selfGuard(['admin', 'manager', 'staff', 'customer']), orderController.getOne);
router.post('/', authGuard, roleGuard(['customer']), validate(orderValidate), orderController.createOne);
router.put('/:id', authGuard, selfGuard(['admin', 'manager', 'staff', 'customer']), validate(orderUpdate), orderController.updateOne);
router.delete('/:id', authGuard, selfGuard(['admin', 'manager']), orderController.deleteOne);

export { router as orderRouter };
