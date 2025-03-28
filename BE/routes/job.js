import express from "express";
import {
  findAllJobs,
  findJobByID,
  findJobByUserID,
  createJob,
  assignJob,
  deleteJob,
} from "../controllers/job.js";
import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/all", findAllJobs);
router.get("/:jobID", findJobByID);
router.get("/user/:userID", findJobByUserID);

router.post("/create", createJob);
router.post("/assign", assignJob);

router.delete("/:jobID", verifyAdmin, deleteJob);

export default router;
