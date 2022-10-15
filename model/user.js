import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {

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
    // category: { type: String, default: "developers" },
    // category: { type: String, default: "designers" },
    // category: { type: String, default: "marketing" },
    category: [
      { developers: { type: String, default: "developers" } },
      { designers: { type: String, default: "designers" } },
      { marketing: { type: String, default: "marketing" } }
    ]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
