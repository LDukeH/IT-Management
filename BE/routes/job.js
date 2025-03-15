import express from "express";
import {
  findAllJobs,
  findJobByID,
  createJob,
  assignJob,
} from "../controllers/job.js";

const router = express.Router();

router.get("/all", findAllJobs);
router.get("/:jobID", findJobByID);

router.post("/create", createJob);
router.post("/assign", assignJob);

export default router;
