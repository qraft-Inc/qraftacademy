import db from "../../../data/db";


export default async function handler(req, res){
    await db.connect();
    await db.disconnect();
    res.status(200).json({name:"john doe"})
}

// DB_USER = user
// DB_PASSWORD = Lw4bEyJlh6KIFnK7
// DB_URL = mongodb+srv://$DB_USER:$DB_PASSWORD@cluster0.jxwjo.mongodb.net/register?retryWrites=true&w=majority