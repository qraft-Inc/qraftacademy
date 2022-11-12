import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: {
      email: { type: String, required: true, unique: true },
      password: { type: String, default: "" },
      fullname: { type: String },
      image: { type: String, default: "" },
      isAdmin: { type: Boolean, required: true, default: false },
    },
    developers: {
      fullname: { type: String },
      telephone: { type: String },
      cv: { type: String },
      letter: { type: String },
      program: { type: String },
      course: { type: String },
      stack: { type: String },
      position: { type: String },
      textarea1: { type: String },
      textarea2: { type: String },
      textarea3: { type: String },
      textarea4: { type: String },
      textarea5: { type: String },
      role: { type: String },
      textarea6: { type: String },
      textarea7: { type: String },
    },
    marketing: {
      telephone: { type: String },
      cv: { type: String },
      letter: { type: String },
      linkedin: { type: String },
      textarea1: { type: String },
      textarea2: { type: String },
      textarea3: { type: String },
      textarea4: { type: String },
      textarea5: { type: String },
      role: { type: String },
      textarea6: { type: String },
      textarea7: { type: String },
    },
    designers: {
      telephone: { type: String },
      cv: { type: String },
      letter: { type: String },
      program: { type: String },
      textarea1: { type: String },
      textarea2: { type: String },
      textarea3: { type: String },
      textarea4: { type: String },
      textarea5: { type: String },
      role: { type: String },
      textarea6: { type: String },
      textarea7: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
