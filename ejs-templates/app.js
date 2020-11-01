//Node & Package Declarations
/*******************************************************/
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.set('view engine', 'ejs'); //set view engine to use Embedded JavaScript Templates for its view engine
//this assumed a 'views' directory exists and it contains an index.ejs file
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public")); //make public folder accessible for css file

//App Variables
/*******************************************************/
let items = []; //list of to do items
let workItems = [];

//Render each webpage when requested by the browser
/*******************************************************/
/*******************************************************/

//Home Route
app.get("/", function (req, res) {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        listTitle: day,
        toDoList: items
    }); //render list.ejs
});

//Work Route
app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        toDoList: workItems
    });
});
//About Route
app.get("/about", function (req, res) {
    res.render("about");
});

/*******************************************************/
//Dynamically respond to post requests by checking the context of the list form submit button name
app.post("/", function (req, res) {
    const item = req.body.newItem;
    console.log("test");
    console.log(req.body);
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/"); //calls our app.get("/",...)
    };
    console.log(item);
});

//Spin up the server after everything else is declared
/*******************************************************/
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});