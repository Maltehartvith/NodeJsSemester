const express = require("express");
const app = express();

app.use(express.static('public'))

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/mainSite.html")
})

app.get("/pepe", (req, res) =>{
    res.sendFile(__dirname + "/public/itIsNotWeekend.html")
})

app.get("/weekend", (req, res) =>{
    res.sendFile(__dirname + "/public/itIsWeekend.html")
})

app.get("/almost", (req, res) =>{
    res.sendFile(__dirname + "/public/almostWeekend.html")
})


const port = process.env.PORT || 5000
app.listen(port);