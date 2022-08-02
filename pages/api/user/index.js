import db from "../../../data/db";
// import nc from "next-connect";
import User from "../../../model/User";

// const handler = nc();

// handler.post(async (req, res) => {
//   const {email,name,phone,program,answer} = req.body;
//   await db.connect();
//   const newUser = new User({
//     email,
//     name,
//     phone,
//     program,
//     answer,
//   });
//   const existingUser = await User.findOne({ email: email });
//   if (existingUser) {
//     return res
//       .status(401)
//       .json({ errorMessage: "User account already exists" });
//   }
//   const savedUser = await newUser.save();
//   await db.disconnect();
//   res.status(201).send(savedUser);
// });

// export default handler;

// display all users
export default async function handler(req, res) {
  const { method } = req;

  await db.connect();

  switch (method) {
    // create new user
    case "POST":
      try {
        const {
          isAdmin,
          email,
          fullname,
          telephone,
          program,
          textarea1,
          textarea2,
          textarea3,
          textarea4,
          textarea5,
          textarea6,
          textarea7,
          role,
          image,
          cv,
          letter,
        } = req.body;
        const newUser = new User({
          isAdmin,
          email,
          fullname,
          telephone,
          program,
          textarea1,
          textarea2,
          textarea3,
          textarea4,
          textarea5,
          textarea6,
          textarea7,
          role,
          image,
          cv,
          letter,
        });
        const user = await newUser.save();
        await db.disconnect();
        return res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
  }
}
