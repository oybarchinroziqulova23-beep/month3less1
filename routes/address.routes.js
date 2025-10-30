import { Router } from 'express';
import { validate } from '../middleware/validation.js';
import { authGuard } from '../middleware/authGuard.js';
import { roleGuard } from '../middleware/roleGuard.js';
import { selfGuard } from '../middleware/selfGuard.js';
import { addressValidate, addressUpdate } from '../validations/address.js';
import { addressController } from '../controllers/address.controller.js';

const router = Router();

router.get('/', authGuard, roleGuard(['manager','admin', 'staff', 'customer']), addressController.getAll);
router.get('/:id', authGuard, roleGuard(['manager','admin', 'staff', 'customer']), addressController.getOne);
router.post('/', authGuard, roleGuard(['customer']), validate(addressValidate), addressController.createOne);
router.put('/:id', authGuard, selfGuard(['manager','admin', 'customer']), validate(addressUpdate), addressController.updateOne);
router.delete('/:id', authGuard, selfGuard(['manager','admin', 'customer']), addressController.deleteOne);

export { router as addressRouter };
