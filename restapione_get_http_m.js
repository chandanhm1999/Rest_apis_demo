const express = require('express');
const app = express();

//second example...!

const games = [{
        id: 1,
        title: 'Mario'
    },
    {
        id: 2,
        title: 'Zelda'
    },
    {
        id: 3,
        title: 'Donkey Kong'
    }
];

// get all games
app.get('/api/games', (req, res) => {
    res.send(games);
});

// get game by id
app.get('/api/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('The game with the given ID was not found.');
    res.send(game);
});

// first example ...!

app.get('/', (req, res) => {
    res.send('Ima change this up!');
});

app.get('/api/games', (req, res) => {
    res.send(['Mario', 'Zelda', 'Donkey Kong']);
});

app.get('/api/games/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/api/games/:title/:publisher', (req, res) => {
    res.send(req.params);
});

app.get('/api/games/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
