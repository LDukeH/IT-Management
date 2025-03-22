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
    const job = await Job.findById(jobID).populate("employeeIds");
    res.json(job);
  } catch (error) {
    console.error(error);
  }
};

export const findJobByUserID = async (req, res) => {
  try {
    const { userID } = req.params;
    const userJobs = await Job.find({ employeeIds: userID });
    res.json(userJobs);
  } catch (error) {
    console.error(error);
    res.json(error);
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
    const { employeeIDS, jobID } = req.body;

    const job = await Job.findByIdAndUpdate(
      jobID,
      { $addToSet: { employeeIds: { $each: employeeIDS } } },
      { new: true }
    );

    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (error) {
    console.error(error);
  }
};
