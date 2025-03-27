import express from "express";
import {
  getAllNotification,
  createNotification,
} from "../controllers/notification.js";

const router = express.Router();

router.get("/all", getAllNotification);

router.post("/create", createNotification);

export default router;
