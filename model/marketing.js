import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    telephone: { type: String, required: true },
    cv: { type: String },
    letter: { type: String },
    linkedin: { type: String, required: true },
    textarea1: { type: String, required: true },
    textarea2: { type: String, required: true },
    textarea3: { type: String, required: true },
    textarea4: { type: String, required: true },
    textarea5: { type: String, required: true },
    role: { type: String, required: true },
    textarea6: { type: String, required: true },
    textarea7: { type: String, required: true },
    image: { type: String, default: "" },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

// const User = mongoose.models.User || mongoose.model("User", userSchema);
// export default User;
const Marketing =
  mongoose.models.Marketing || mongoose.model("Marketing", userSchema);
export default Marketing;
