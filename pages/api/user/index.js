import db from "../../../data/db";
import nc from "next-connect";
import User from "../../../model/User";

const handler = nc();

handler.post(async (req, res) => {
  const {email,name,phone,program,answer} = req.body;
  await db.connect();
  const newUser = new User({
    email,
    name,
    phone,
    program,
    answer,
  });
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res
      .status(401)
      .json({ errorMessage: "User account already exists" });
  }
  const savedUser = await newUser.save();
  await db.disconnect();
  res.status(201).send(savedUser);
});

export default handler;
