import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    email: {type:String, required:true, unique:true},
    name: {type:String, required:true},
    phone: {type:String, required:true},
    program: {type:String, required:true},
    answer: {type:String, required:true}
  },
  {
    timestamps: true,
  }
);

const Register =
  mongoose.models.Register || mongoose.model("Register", registerSchema);
export default Register;
