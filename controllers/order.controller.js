import baseController from "./base.controller.js";
import order from "../model/order.js";

class orderController extends baseController {}
export default new orderController(order);