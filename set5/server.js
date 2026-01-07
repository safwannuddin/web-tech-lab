const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const url = "mongodb://localhost:27017";

// Create DB and Collection
app.get("/add", async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db("college");

  await db.collection("students").insertMany([
    { id: 1, name: "Safwan" },
    { id: 2, name: "Ahad" },
    { id: 3, name: "Razi" }
  ]);

  res.send("Database and Collection Created");
});

app.listen(5000, () => {
  console.log("Server Running");
});
