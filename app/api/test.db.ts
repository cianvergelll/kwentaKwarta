// pages/api/test-db.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Use the MongoDB URI from the environment variable
const uri = process.env.MONGODB_URI!;

// Create a MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to MongoDB
    await client.connect();
    
    // Send a ping to confirm successful connection
    await client.db("admin").command({ ping: 1 });
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // Respond with a success message
    res.status(200).json({ message: "MongoDB connected successfully!" });
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    
    // Respond with an error message
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  } finally {
    // Ensure that the client closes
    await client.close();
  }
}
