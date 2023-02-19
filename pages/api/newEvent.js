import { MongoClient } from "mongodb";

const password =process.env.PASSWORD;
async function handler(req, res){
if (req.method==='POST'){
    const data= req.body;

    const client = await MongoClient.connect(`mongodb+srv://manojmathew:${password}@cluster0.sr0evq9.mongodb.net/events?retryWrites=true&w=majority`);
    const db= client.db();

    const eventsCollection= db.collection('events');
    const results= await eventsCollection.insertOne(data);

    console.log(results);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });

}
 
}

export default handler;