import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
  employeeIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model("Job", JobSchema);
