// Program-13: Create DB and Collection in MongoDB using Node.js
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "safwan";

MongoClient.connect(url)
  .then(client => {
    console.log("1604-22-733-177 Database connected.");

    const db = client.db(dbName);

    // Create collection BEFORE closing
    return db.createCollection("students")
      .then(() => {
        console.log("Collection 'students' created.");
        client.close();  // close only after success
      })
      .catch(err => {
        console.log("Collection already exists or error:", err.message);
        client.close();
      });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err);
  });
