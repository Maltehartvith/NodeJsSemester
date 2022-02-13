//import express
//oneliner:
//const app = require("express")();
//getting the libary
const express = require("express");
//instanciation of the express that is running the application 
const app = express();

//This makes the app ready to use json objects 
app.use(express.json());

//
app.get("/", (req, res) => {
    res.send({message: "We made it!"});

});

app.get("/welcome", (req, res) => {
    res.send({'welcome message': "Welcome to this new site, Client"})
})

app.post("/mirror", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});






//choose a port for the program, so the server can start, and keep the port at the bottom
app.listen(8080);

