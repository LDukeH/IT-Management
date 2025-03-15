import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  code: String,
  password: String,
  position: String,
});

export default mongoose.model("User", UserSchema);
