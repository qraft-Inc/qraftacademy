import db from "../../../data/db";
import User from "../../../model/User";

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
          course,
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
          course,
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
