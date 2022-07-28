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
        // const { password, status, isAdmin, email, fullname, telephone, program,
        //   textarea1, textarea2, textarea3, textarea4, textarea5, textarea6, textarea7, role, image, cv, letter } = req.body;
        const { email } = req.body
        const newUser = new User({
          // password,
          // isAdmin,
          // status,
          email,
          // fullname,
          // telephone,
          // program,
          // textarea1,
          // textarea2,
          // textarea3,
          // textarea4,
          // textarea5,
          // textarea6,
          // textarea7,
          // role,
          // image,
          // cv,
          // letter

          //  password: req.body.password,
          // isAdmin: req.body.isAdmin,
          // status: req.body.status,
          // email: req.body.email,
          // fullname: req.body.fullname,
          // telephone: req.body.telephone,
          // program: req.body.program,
          // textarea1: req.body.textarea1,
          // textarea2: req.body.textarea2,
          // textarea3: req.body.textarea3,
          // textarea4: req.body.textarea4,
          // textarea5: req.body.textarea5,
          // textarea6: req.body.textarea6,
          // textarea7: req.body.textarea7,
          // role: req.body.role,
          // image: req.body.image,
          // cv: req.body.cv,
          // letter: req.body.letter
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
