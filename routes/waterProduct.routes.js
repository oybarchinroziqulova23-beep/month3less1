import { Router } from 'express';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { validate } from '../middleware/validation.js';
import { productValidate, productUpdate } from '../validations/product.js';
import { waterProductController } from '../controllers/waterProducts.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['admin', 'manager', 'staff', 'customer']), waterProductController.getAll);
router.get('/:id', authGuard, roleGuard(['admin', 'manager', 'staff', 'customer']), waterProductController.getOne);
router.post('/', authGuard, roleGuard(['admin', 'manager']), validate(productValidate), waterProductController.createOne);
router.put('/:id', authGuard, roleGuard(['admin', 'manager']), validate(productUpdate), waterProductController.updateOne);
router.delete('/:id', authGuard, roleGuard(['admin']), waterProductController.deleteOne);

export { router as productRouter };
