const express = require("express");
const app = express();

app.use(express.static('public'));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const themeparkPage = fs.readFileSync("./public/pages/themepark/themepark.html").toString();


const frontpageConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Front page") + frontpage + footer.replace("%$CR1PT", "");
const themeparkConCat = nav.replace("%%TITLE_PLACEHOLDER%%", "Theme park") + themeparkPage + footer.replace("%$CR1PT", "");

app.get("/", (req, res) => {
    res.send(frontpageConCat);
});


app.get("/themepark", (req, res) => {
    res.send(themeparkConCat);
});


app.listen(8080, () =>{
    console.log("Server is running on:", 8080);

});