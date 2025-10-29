import express from "express";
import { createRecord, getRecords, getRecordById, updateRecord, deleteRecord, searchRecords } from "../controllers/universalController.js";
import { authGuard } from "../middlewares/authGuard.js";
import { validateOrderItem } from "../middlewares/validation.js";

const router = express.Router();

const table = "waterProduct";

router.post("/", authGuard, validateOrderItem, (req, res) => createRecord(req, res, table));
router.get("/", authGuard, (req, res) => getRecords(req, res, table));
router.get("/search", authGuard, (req, res) => searchRecords(req, res, table));
router.get("/:id", authGuard, (req, res) => getRecordById(req, res, table));
router.put("/:id", authGuard, validateOrderItem, (req, res) => updateRecord(req, res, table));
router.delete("/:id", authGuard, (req, res) => deleteRecord(req, res, table));

export default router;