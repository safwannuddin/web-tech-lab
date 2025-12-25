// Program-7: Demonstrate working of built-in Node.js modules and file system
// Roll Number: 1604-22-733-177

const http = require("http");
const os = require("os");
const fs = require("fs");
const { promisify } = require("util");

const open = promisify(fs.open);
const writeFile = promisify(fs.writeFile);
const appendFile = promisify(fs.appendFile);
const rename = promisify(fs.rename);
const readFile = promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    // Display system information
    res.write("<h2>Welcome to Web Technologies Lab</h2><br>");
    res.write("Current Date: " + Date() + "<br>");
    res.write("Operating Platform: " + os.platform() + "<br>");
    res.write("System Architecture: " + os.arch() + "<br>");
    res.write("Host Name: " + os.hostname() + "<br>");
    res.write("Operating System Type: " + os.type() + "<br>");

    // Read file content
    try {
        const text = await readFile("content.txt", "utf8");
        res.write("<br><b>File Content:</b><br>" + text);
    } catch (err) {
        res.write("<br><b>File Content:</b><br>Could not read content.txt");
    }

    res.end();
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});

// File Operations Demo
(async () => {
    try {
        await open("myfile1.txt", "w");
        console.log("myfile1.txt created");
    } catch (err) {
        console.error("Error creating myfile1.txt:", err);
    }

    try {
        await writeFile("myfile3.txt", "Hello Lab");
        console.log("Content written to myfile3.txt");
    } catch (err) {
        console.error("Error writing to myfile3.txt:", err);
    }

    try {
        await appendFile("myfile1.txt", " Hello Web");
        console.log("Content appended to myfile1.txt");
    } catch (err) {
        console.error("Error appending to myfile1.txt:", err);
    }

    try {
        await rename("myfile3.txt", "myfile4.txt");
        console.log("File renamed to myfile4.txt");
    } catch (err) {
        console.error("Error renaming myfile3.txt:", err);
    }
})();

console.log("Roll Number: 1604-22-733-177");

