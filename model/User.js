import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    // password: { type: String },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    program: { type: String, required: true },
    answer: { type: String, required: true },
    image: { type: String },
    isAdmin: { type: Boolean, required: true, default: false },
    status: { type: Boolean, required: true, default: "student"},

  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
