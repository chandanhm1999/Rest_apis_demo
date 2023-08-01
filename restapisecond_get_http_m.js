const express = require('express');
const app = express();

app.use(express.json());

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

// add a game
app.post('/api/games', (req, res) => {
    const game = {
        id: games.length + 1,
        title: req.body.title
    }
    games.push(game);
    res.send(game);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
