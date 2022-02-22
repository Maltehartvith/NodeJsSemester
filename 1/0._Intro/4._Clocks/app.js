const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")

});

app.get("/welcome", (req, res) => {
    res.send(`
        <h1>Welcome to my website </h1>
        <h2>This is B A L L S </h2>
    `);
});

/*app.get("/forecast", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
});*/

app.listen(8080, () => {
    console.log("App is running on port", 8080)
});