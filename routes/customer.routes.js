import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { selfGuard } from '../middleware/selfGuard.js';
import { validate } from '../middleware/validation.js';
import { customerValidate, customerUpdate } from '../validations/customer.js';
import { customerController } from '../controllers/customer.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager', 'staff']), customerController.getAll);
router.get('/:id', authGuard, selfGuard(['admin', 'manager', 'customer']), customerController.getOne);
router.post('/', validate(customerValidate), customerController.createOne);
router.put('/:id', authGuard, selfGuard(['admin', 'manager', 'customer']), validate(customerUpdate), customerController.updateOne);
router.delete('/:id', authGuard, selfGuard(['admin', 'manager', 'customer']), customerController.deleteOne);

export { router as customerRouter };
