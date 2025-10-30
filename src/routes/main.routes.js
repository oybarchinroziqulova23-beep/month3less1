import { Router } from 'express';
import { districtRouter } from './district.routes.js';
import { deliveryStaffRouter } from './deliveryStaff.routes.js';
import { customerRouter } from './customer.routes.js';
import { productRouter } from './waterProduct.routes.js';
import { orderRouter } from './order.routes.js';
import { orderItemRouter } from './orderItems.routes.js';
import { addressRouter } from './address.routes.js';
import { paymentRouter } from './payment.routes.js';

const router = Router();

router.use('/districts', districtRouter);
router.use('/delivery-staff', deliveryStaffRouter);
router.use('/customers', customerRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/order-items', orderItemRouter);
router.use('/addresses', addressRouter);
router.use('/payments', paymentRouter);

const mainRouter = router;
export default mainRouter;