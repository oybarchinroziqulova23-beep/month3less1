import baseController from "./base.controller.js";
import orderItems from "../model/orderItems.js";

class orderItemsController extends baseController {}
export default new orderItemsController(orderItems);