import baseController from "./base.controller.js";
import customer from "../model/customer.js";

class customerController extends baseController {}
export default new customerController(customer);
