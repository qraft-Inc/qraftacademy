import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, default: "" },
    fullname: { type: String, required: true },
    telephone: { type: String, required: true },
    course: { type: String, required: true },
    stack: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    position: { type: String, required: true },
    program: { type: String, required: true },
    textarea1: { type: String, required: true },
    textarea2: { type: String, required: true },
    textarea3: { type: String, required: true },
    textarea4: { type: String, required: true },
    textarea5: { type: String, required: true },
    textarea6: { type: String, required: true },
    textarea7: { type: String, required: true },
    role: { type: String, required: true },
    cv: { type: String },
    letter: { type: String },
    isAdmin: { type: Boolean, required: true, default: false },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
