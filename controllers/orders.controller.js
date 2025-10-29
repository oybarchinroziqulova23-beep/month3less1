import pool from "../config/db.js";
import { baseController } from "./baseController.js";

export const ordersController = baseController("orders", pool);
