import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // email: { type: String, required: true, unique: true },
    // fullname: { type: String, required: true },
    // telephone: { type: String, required: true },
    // cv: { type: String },
    // letter: { type: String },
    // program: { type: String, required: true },
    // course: { type: String, required: true },
    // stack: { type: String, required: true },
    // position: { type: String, required: true },
    // linkedin: { type: String, required: true },
    // textarea1: { type: String, required: true },
    // textarea2: { type: String, required: true },
    // textarea3: { type: String, required: true },
    // textarea4: { type: String, required: true },
    // textarea5: { type: String, required: true },
    // role: { type: String, required: true },
    // textarea6: { type: String, required: true },
    // textarea7: { type: String, required: true },
    // password: { type: String, default: "" },
    // image: { type: String, default: "" },
    // isAdmin: { type: Boolean, required: true, default: false },

    email: { type: String, unique: true },
    fullname: { type: String },
    telephone: { type: String },
    cv: { type: String },
    letter: { type: String },
    program: { type: String },
    course: { type: String },
    stack: { type: String },
    position: { type: String },
    linkedin: { type: String },
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
