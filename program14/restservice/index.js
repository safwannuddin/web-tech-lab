// Program-14: Retrieve data from MongoDB using Express (require syntax)
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017/";
const dbName = "mymongodb";
let db;

async function connectDB() {
  try {
    const client = await MongoClient.connect(url);
    db = client.db(dbName);
    console.log("Connected to MongoDB - Roll No: 1604-22-733-177, Name: Mohd Safwan Uddin");

    const collection = db.collection("student");
    const count = await collection.countDocuments();

    if (count === 0) {
      await collection.insertMany([
        { id: 101, name: "Mohd Safwan Uddin", marks: 92 },
        { id: 102, name: "Ahad", marks: 78 },
        { id: 103, name: "Nabeel", marks: 82 },
        { id: 104, name: "kazim", marks: 90 }
      ]);
      console.log("Sample data inserted");
    }
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}

connectDB();

app.get("/retrieve", async (req, res) => {
  try {
    const result = await db.collection("student").find({}).toArray();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

app.listen(8080, () => {
  console.log("REST Server running on port 8080 for 1604-22-733-177");
});
