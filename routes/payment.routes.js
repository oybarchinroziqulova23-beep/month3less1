import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { validate } from '../middleware/validation.js';
import { paymentValidate, paymentUpdate } from '../validations/payments.js';
import { paymentController } from '../controllers/payment.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager', 'staff']), paymentController.getAll);
router.get('/:id', authGuard, roleGuard(['admin', 'manager', 'staff', 'customer']), paymentController.getOne);
router.post('/', authGuard, roleGuard(['staff', 'customer']), validate(paymentValidate), paymentController.createOne);
router.put('/:id', authGuard, roleGuard(['admin', 'manager', 'staff']), validate(paymentUpdate), paymentController.updateOne);
router.delete('/:id', authGuard, roleGuard(['admin']), paymentController.deleteOne);

export { router as paymentRouter };
