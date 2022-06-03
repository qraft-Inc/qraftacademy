import nc from 'next-connect'
import db from '../../../data/db';
import users from '../../../data/db';
import Register from '../../../modal/Register';

const handler = nc();

handler.get(async(req, res) =>{
    await db.connect();
    await Register.deleteMany();
    await Register.insertMany(users.data)
    await db.disconnect();
    res.send({message:"seeded successfull"});
})

export default handler;