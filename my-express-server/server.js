//https://expressjs.com/en/starter/hello-world.html
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    console.log(req); //see info about request
    res.send("Hello"); //respond to request
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: jamessizeland@gmail.com");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
}); //create http listener on port 3000