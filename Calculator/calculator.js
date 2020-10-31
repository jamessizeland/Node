const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
})); //encoding format used for html 

app.get("/", function (req, res) {
    console.log("Hello World");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    let num1 = +req.body.num1;
    let num2 = +req.body.num2;

    let result = num1 * num2;
    res.send(`result of calculation is ${result}`);
});

app.get("/bmiCalculator", function (req, res) {
    console.log("BMI");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    console.log(req.body);
    let weight = +req.body.weight;
    let height = +req.body.height;

    let result = weight / Math.pow(height, 2);
    res.send(`result of calculation is ${result}`);
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});