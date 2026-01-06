const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const url = "mongodb://localhost:27017";

// CORS middleware
app.use((req, res, next) => {

  console.log("Request:", req.method, req.url);
  next();
});

// CREATE
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

// READ
app.get("/students", async (req, res) => {
  const client = await MongoClient.connect(url);
  const db = client.db("college");

  const data = await db.collection("students").find().toArray();
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
