const express = require("express");
const app = express();
app.use(express.json());

//opretter et objekt, samt laver et array til at indeholde objekter.
const pilsner = {id: 1, name: "Pilsner"}
const beerArray = [ pilsner, {id: 2, name: "IPA"} ];

//Get uden id - viser alle objekter inden i beerArray
app.get("/beers", (req, res) => {
    res.send(beerArray);
});

//Get med id - viser en øl med det specifikke id
app.get(`/beers/:beersId`, (req, res) => {
    const singleBeer = beerArray.filter(x => x.id === parseInt(req.params.beersId));
    //error handling
    if (!singleBeer) {
        return res.status(404).send(`Beer with the id: ${req.params.beersId} were not found`);
    }

    res.send(singleBeer);
});

//Post til at lave en øl
app.post(`/beers`, (req, res) => {
    //tager imod id og navn på den øl som bliver lavet
    const beerId = req.body.id    
    const beerName = req.body.name; 
    
    //en auto increment, som hjælper hvis man kun skriver et navn på en øl, eller hvis id'et er taget 
    const autoIncrement = beerArray.at(-1).id + 1;

    //if statement som sørger for at lave en øl uden der bliver skrevet et id
    if (!beerId) {
        const newBeer = {id: autoIncrement, name: beerName};
        beerArray.push(newBeer);

        res.send(newBeer);
        return;
    }
    
    //if statement som sørger for at hvis id'et er taget, at der så bliver sat et andet id baseret på det sidste objekts id i 
    //arrayet, og sætter det en højere end det.
    if(beerArray.some(beer => beer.id === beerId)) {
        res.send(`${beerId} as id was already taken. New id is: ${autoIncrement} instead`);
        const newBeer = {id: autoIncrement, name: beerName};
        beerArray.push(newBeer);
        return;
    }

    //hvis id'et er defineret og ikke taget
    const newBeer = {id: beerId, name: beerName};
       
    beerArray.push(newBeer);

    res.send(newBeer);
});

//Patch metode til at ændre en eller flere ting i et eksisterende objekt baseret på et id
app.patch(`/beers/:beersId`, (req, res) => {
    const beerToPatch = beerArray.find(x => x.id === parseInt(req.params.beersId))
    
    //Error handling
    if (!beerToPatch) {
        return res.status(404).send(`Beer with the id: ${req.params.beersId} were not found`);
    }

    //to if statements som sørger for hvis der ikke bliver ændret enten navn eller id, at det så forbliver det samme.
    if (!req.body.id) {
        beerToPatch.id
    } else {
        beerToPatch.id = req.body.id;
    }
    
    if (!req.body.name){
        beerToPatch.name;
    } else {
        beerToPatch.name = req.body.name;
    }

    res.send(beerToPatch)
});

//Put metode til at ændre et helt objekt baseret på et id
app.put(`/beers/:beersId`, (req, res) => {

    //Error handling
    if (!beerArray.find(beer => beer.id === parseInt(req.params.beersId))) {
        return res.status(404).send(`Beer with the id: ${req.params.beersId} were not found`);
    }

    //finder den øl man søger på, samt gør JSON objektet til en string så det kan printes ordenligt
    const beerBeforeEdit = JSON.stringify(beerArray.find(x => x.id === parseInt(req.params.beersId)));

    //finder index vha id fra endpoint
    const index = beerArray.findIndex(b => b.id === parseInt(req.params.beersId))

    //laver en øl ud fra hvad der bliver skrevet i request body
    const beer = req.body
    
    //Sætter et forud bestemt id, så der ikke går ged i den.
    beer.id = parseInt(req.params.beersId);

    //Sætter den nye øl ind på den gamle øl's plads
    beerArray[index] = beer

    //Skal være efter man bestemmer id og navn, så man får det opdaterede objekt
    const beerAfterEdit = JSON.stringify(beer) 

    res.send(`${beerBeforeEdit} were edited to: ${beerAfterEdit}`);
});

//Delete metode som sletter en øl baseret på id
app.delete(`/beers/:beersId`, (req, res) => {

    const beerToDelete = JSON.stringify(beerArray.find(x => x.id === parseInt(req.params.beersId)));
    
    //Error handling
    if (!beerToDelete) {
        return res.status(404).send(`Beer with the id: ${req.params.beersId} were not found, and therefore couldn't be deleted`);
    }

    //fjerner objektet som er fundet ved hjælp af beerArray.find() metoden
    beerArray = beerArray.filter(beer => beer.id !== beersId)

    res.send(beerToDelete + `was deleted`);
});

//Bestemmer porten for localhost.
app.listen(8080);