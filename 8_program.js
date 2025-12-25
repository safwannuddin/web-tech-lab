// Program 8: Demonstrate routes and parameter handling in Express.js
// Roll Number: 1604-22-733-177

var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Welcome to Home Page created using Express.js by Safwan");
});

app.get("/signup", function(req, res) {
    res.send("Signup Page created using Express.js by Safwan");
});

app.get("/login", function(req, res) {
    res.send("Login Page");
});

// Parameters Example
app.get("/display/:name/:pwd", function(req, res) {
    res.send("Username: " + req.params.name +
             "<br>Password: " + req.params.pwd);
});

app.listen(8080, function() {
    console.log("Server Running at http://localhost:8080");
});
