import BaseController from "./baseController.js";
import Customer from "../models/Customer.js";

class CustomerController extends BaseController {}
export default new CustomerController(Customer);
