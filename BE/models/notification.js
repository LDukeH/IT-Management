import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  for: String,
});

export default mongoose.model("Notification", NotificationSchema);
