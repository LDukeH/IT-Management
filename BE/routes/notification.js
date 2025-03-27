import express from "express";
import { getAllNotification } from "../controllers/notification.js";

const router = express.Router();

router.get("/all", getAllNotification);

export default router;
