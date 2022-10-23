require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");

absolutePath = __dirname + "/views/index.html";

app.get("/", function (req, res) {
    res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
    let msg = "Hello json";
    res.json({"message": process.env['MESSAGE_STYLE'] === "uppercase" ? msg.toUpperCase() :  msg});
});































module.exports = app;
