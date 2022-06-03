import db from "../../../data/db";
import nc from "next-connect";
import Register from "../../../modal/Register";

const handler = nc();

handler.post(async (req, res) => {
  const {email,name,phone,program,answer} = req.body;
  await db.connect();
  const newUser = new Register({
    email,
    name,
    phone,
    program,
    answer,
  });
  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send(user);
});

export default handler;
