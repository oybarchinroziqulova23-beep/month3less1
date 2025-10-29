import express from "express";
import usersRoutes from "./usersRoutes.js";
import productsRoutes from "./productsRoutes.js";
import ordersRoutes from "./ordersRoutes.js";
import addressRoutes from "./addressRoutes.js";
import orderItemsRoutes from "./orderItemsRoutes.js";

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/products", productsRoutes);
router.use("/orders", ordersRoutes);
router.use("/address", addressRoutes);
router.use("/order-items", orderItemsRoutes);

export default router;
