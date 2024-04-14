import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
        res.status(422).json({ message: 'Invalid input.' })
        return;
    }
    // store in data base
    const newMessage = {
        email,
        name,
        message
    };

    let client;
    // for the final deployment
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.password}@${process.env.mongodb_clustername}.w6j0ohc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2`;

    try {
        client = await MongoClient.connect(
            // 'mongodb+srv://audrius13toto:RJxYjbompAOnYiO5@cluster2.w6j0ohc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2'
            connectionString
        );
    } catch(error){
        res.status(500).json({message: error.message})
        return; 
    }

    const db = client.db();

    try{
        const result = await db.collection('message').insertOne(newMessage);
        newMessage.id = result.insertedId
    } catch (error){
        client.close()
        res.status(500).json({message: 'Storing message failed!'})
        return;
    }
    client.close();
    res.status(201).json({ message: 'Succesfully stored message!', message: newMessage })
  }
}

export default handler;
