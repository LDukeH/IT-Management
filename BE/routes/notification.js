import express from "express";
import {
  getAllNotification,
  createNotification,
  deleteNotification,
  getNotificationByID,
} from "../controllers/notification.js";
import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/all", getAllNotification);
router.get("/:notificationID", getNotificationByID);

router.post("/create", createNotification);

router.delete("/:notificationID", verifyAdmin, deleteNotification);

export default router;
