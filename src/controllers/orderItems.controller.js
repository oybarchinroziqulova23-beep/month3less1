import baseController from "./base.controller.js";
import orderItems from "../model/orderItems.js";

export const orderItemsController = new baseController(orderItems);