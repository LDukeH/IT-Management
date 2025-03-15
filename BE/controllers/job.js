import Job from "../models/job.js";

export const findAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.json(allJobs);
  } catch (error) {
    console.error(error);
  }
};

export const findJobByID = async (req, res) => {
  try {
    const { jobID } = req.params;
    const job = await Job.findById(jobID);
    res.json(job);
  } catch (error) {
    console.error(error);
  }
};

export const createJob = async (req, res) => {
  try {
    const newJob = Job.create(req.body);
    res.json(newJob);
  } catch (error) {
    console.error(error);
  }
};

export const assignJob = async (req, res) => {
  try {
    const { jobID } = req.body;
    const { employeeID } = req.body;

    const job = await Assignment.findByIdAndUpdate(
      jobID,
      { $addToSet: { employeeIds: { $each: employeeID } } }, // Tránh trùng lặp
      { new: true }
    );

    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (error) {
    console.error(error);
  }
};
