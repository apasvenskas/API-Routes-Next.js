import MongoClient from "mongodb/lib/mongo_client";

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

    // use mongo client to connect to the data base
    // password: rlnEg1dxd7lF4wTy
    // another connection string mongodb+srv://audrius13toto:<password>@cluster2.w6j0ohc.mongodb.net/
    let client;
    try {
        client = await MongoClient.connect(
            'mongodb+srv://audrius13toto:rlnEg1dxd7lF4wTy@cluster2.w6j0ohc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2'
        );
    } catch(error){
        res.status(500).json({message: error.message})
        return; 
    }

    const db = client.db();

    try{
        const result = db.collection('message').insertOne();
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
