import express from "express";
import {
  createUser,
  findUserByCode,
  getAllUser,
  getCurrentUser,
  login,
  logout,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/all", getAllUser);
router.get("/current", verifyToken, getCurrentUser);
router.get("/:code", verifyToken, findUserByCode);

router.post("/create", createUser);
router.post("/login", login);
router.post("/logout", logout);
export default router;
