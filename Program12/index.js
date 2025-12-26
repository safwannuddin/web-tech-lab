// Program-12 Backend REST API
// Roll Number: 1604-22-733-177

var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

// UPDATED STUDENTS LIST
var students = [
  { id: 101, name: "Safwan" },
  { id: 102, name: "Ahad" },
  { id: 103, name: "Haseeb" },
  { id: 104, name: "Ansar" },
  { id: 105, name: "Omer" }
];

var imarks = [
  { id: 101, marks: 28 },
  { id: 102, marks: 30 },
  { id: 103, marks: 27 },
  { id: 104, marks: 29 },
  { id: 105, marks: 26 }
];

var emarks = [
  { id: 101, marks: 70 },
  { id: 102, marks: 68 },
  { id: 103, marks: 66 },
  { id: 104, marks: 72 },
  { id: 105, marks: 65 }
];

app.get("/students", (req, res) => res.json(students));
app.get("/imarks", (req, res) => res.json(imarks));
app.get("/emarks", (req, res) => res.json(emarks));

app.listen(8080, function () {
  console.log("REST Service running on port 8080");
});
