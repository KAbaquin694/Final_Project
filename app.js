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
    res.send("This Is Text.")
});

app.get('/:id', async (req, res) => {
try {
    const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
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

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on port ${port}`);
});
