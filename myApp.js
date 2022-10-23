require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");

app.use(function (req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

absolutePath = __dirname + "/views/index.html";

app.get("/", function (req, res) {
    res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
    let msg = "Hello json";
    res.json({ "message": process.env['MESSAGE_STYLE'] === "uppercase" ? msg.toUpperCase() : msg });
});

app.get("/now", function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time: req.time});
});

app.get("/:word/echo", function(req, res){
    res.json({echo: req.params.word});
});

app.route("/name").get(function(req,res){
    res.json({name: `${req.query.first} ${req.query.last}`});
});



























module.exports = app;
