const express = require('express');
// const helmet = require('helmet')
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

app.get('/litten', async (req, res) => {
try {
    // const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
    const URI = `https://pokeapi.co/api/v2/pokemon/litten`;
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
            res.send("This Is A Quality Joke.")
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
        res.send("This Is Today's Weather.")
        const URI = `api.openweathermap.org/data/2.5/weather?q=Phoenix`
        const weatherToday = await fetch(URI);
        // res.render('index', {
        //     weatherToday
        // });

} catch (error) {
    console.log(error);
}
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on port ${port}`);
});
