import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  id: { type: String },
});

export default mongoose.model("UserModal", userSchema);