import baseController from "./base.controller.js";
import payment from "../model/payment.js";

class paymentController extends baseController {}
export default new paymentController(payment);