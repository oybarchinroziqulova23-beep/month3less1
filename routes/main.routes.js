import express from "express";
import customerRoutes from "./customer.routes.js";
import productRoutes from "./water_product.routes.js";
import orderRoutes from "./orders.routes.js";
import addressRoutes from "./address.routes.js";
import orderItemsRoutes from "./order_items.routes.js";
import deliveryStaffRoutes from "./delivery_staff.routes.js";
import paymentRoutes from "./payment.routes.js";

const router = express.Router();

router.use("/customer", customerRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/address", addressRoutes);
router.use("/order-items", orderItemsRoutes);
router.use("/delivery",deliveryStaffRoutes);
router.use("/payment",paymentRoutes);
router.use("/adsress",addressRoutes);

export default router;
