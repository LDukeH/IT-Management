import express from "express";
import {
  createUser,
  findUserByCode,
  getAllUser,
  getCurrentUser,
  editUser,
  login,
  logout,
  deleteUser,
} from "../controllers/user.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.js";
import { upload } from "../utils/upload.js";

const router = express.Router();

router.get("/all", getAllUser);
router.get("/current", verifyToken, getCurrentUser);
router.get("/:code", verifyToken, findUserByCode);

router.put("/update/", verifyToken, upload.single("image"), editUser);

router.post("/create", createUser);
router.post("/login", login);
router.post("/logout", logout);

router.delete("/:userID", verifyAdmin, deleteUser);
export default router;
