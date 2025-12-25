var express = require("express");
var app = express();
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods",
"GET,PUT,POST,DELETE,OPTIONS");
res.header("Access-Control-Allow-Headers", "Origin, XRequested-With, Content-Type, Accept");
next();
});
app.get("/", function(req, res) {
res.send("Welcome to Home Page");
});
app.get("/marks", function(req, res) {
const marksData = [
{ id: 1, subject: "Math", imarks: 18, emarks: 67 },
{ id: 2, subject: "Physics", imarks: 17, emarks: 70 },
{ id: 3, subject: "Chemistry", imarks: 19, emarks: 65 },
{ id: 4, subject: "English", imarks: 20, emarks: 80 }
];
res.json(marksData);
});
app.listen(8080, function() {
console.log("Server Running");
});