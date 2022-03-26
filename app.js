const express = require("express"),
    app = express(),
    dpci_handler = require("./controllers/dpci");

require('dotenv').config();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
	res.render("./index");
});

//Temporary route without API key
app.post("/item", (req,res)=>{
    res.render("./item");
})

app.get("/item", (req,res) => {
	res.render("./item");
});
//Correct way to do it
//app.post("/", (req,res)=>{dpci_handler.handleDPCI(req,res);})

app.listen(process.env.PORT, function(){
	console.log("App is running on " + process.env.PORT);
});