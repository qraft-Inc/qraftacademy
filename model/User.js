import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    fullname: { type: String },
    telephone: { type: String },
    cv: { type: String },
    letter: { type: String },
    linkedin: { type: String },
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
    password: { type: String, default: "" },
    image: { type: String, default: "" },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
