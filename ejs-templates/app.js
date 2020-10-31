//establish constants
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.set('view engine', 'ejs'); //set view engine to use Embedded JavaScript Templates for its view engine
//this assumed a 'views' directory exists and it contains an index.ejs file


app.get("/", function (req, res) {
    const today = new Date();
    // const currentDay = today.getDay();
    // const date = today.getDate();
    // let day = "";

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednseday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log(`Error: current day is equal to ${currentDay}`);
    // }
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindOfDay: day
    })
});

app.post("/", function (req, res) {
    let newItem = req.body.newItem;
})

app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});