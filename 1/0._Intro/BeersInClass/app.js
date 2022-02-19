const express = require("express");
const app = express();

const beers = [
    { id: 1, type: "Pilser" },
    { id: 2, brand: "Carlsberg", alcoholPercentage: 4.6 },
    { id: 3, experationDate: new Date() }
];

app.get("/beers", (req, res) => {
    res.send({data: beers});
});

app.get("/beers/:id", (req, res) => {
    const foundBeer = beers.find(beer => beer.id === Number(req.params.id));

    foundBeer ? res.send({ data: foundBeer }) : res.status(204).send(`beer with id: ${req.params.id} was not found`);
});

app.delete("/beers/:id", (req, res) => {
    const foundBeerIndex = beers.findIndex(beer => beer.id === Number(req.params.id));

    if(foundBeerIndex !== -1){
        beers.splice(foundBeerIndex, 1)
        res.send({data : beers});
    } else {
        res.status(404).send({});
    }
});

app.listen(8080);