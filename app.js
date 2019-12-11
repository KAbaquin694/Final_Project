const express = require('express');
const app = express();
var port = 7777;
const fetch = require('node-fetch');

const hbs = require('express-handlebars')({
    extname: '.hbs',
});

app.engine('hbs', hbs);
app.set('view engine','hbs');

app.get('/', (req, res) => {
    res.send("This Is Home.")
});

app.get('/ditto', async (req, res) => {
try {
    const URI = `https://pokeapi.co/api/v2/pokemon/ditto`;
    const pokemonData = await fetch(URI);
    const json = await pokemonData.json();
    pokeName = await json.name;
    pokeImg = await json.sprites.front_default;
    
    await res.render('index', {
        name: pokeName,
        img: pokeImg
    });
} catch (error) {
    console.log(error);
}
});

app.get('/joke', async (req, res) => {
    try {
            res.send("This Is Joke.")
            const URI = `https://icanhazdadjoke.com/`;
            const dadDATA = await fetch(URI).then(data=>data)
            .then(data =>{ 
                console.log(data) 
                // res.render('index', {
                //     img: dadJoke
                // });
            }
            );
            // const dadDATA = await fetch(URI);
            console.log(dadDATA)
            // res.render('index', {
            //     img: dadJoke
            // });

    } catch (error) {
        console.log(error);
    }
    });

app.get('/weather', async (req, res) => {
try {
        res.send("This Is Weather.")
} catch (error) {
    console.log(error);
}
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on port ${port}`);
});
