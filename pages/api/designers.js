import db from "../../data/db";
import Designers from "../../model/designers"

// display all users
export default async function handler(req, res) {
  const { method } = req;

  await db.connect();

  switch (method) {
    // create new user
    case "POST":
      try {
        const {
          email,
          fullname,
          telephone,
          cv,
          letter,
          program,
          textarea1,
          textarea2,
          textarea3,
          textarea4,
          textarea5,
          role,
          textarea6,
          textarea7,
          image,
          isAdmin,

        } = req.body;
        const newUser = new Designers({
          email,
          fullname,
          telephone,
          cv,
          letter,
          program,
          textarea1,
          textarea2,
          textarea3,
          textarea4,
          textarea5,
          role,
          textarea6,
          textarea7,
          image,
          isAdmin,
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
