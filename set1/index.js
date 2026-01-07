// Demonstrate built-in Node.js modules and File System

// Import built-in modules
var fs = require("fs");
var os = require("os");

// Write data to a file
fs.writeFileSync("demo.txt", "Hello from Node.js File System");

// Read data from file
var data = fs.readFileSync("demo.txt", "utf8");

// Display output
console.log("File Content:", data);
console.log("Operating System:", os.platform());
console.log("Total Memory:", os.totalmem());
