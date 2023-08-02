const express = require('express');
const app = express();
const Joi = require('joi');


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
app.post('/api/games', async (req, res) => {
    const schema = Joi.object({
        title: Joi.string().min(2).required()
    });

    try {
        const validationResult = await schema.validateAsync(req.body);
        // If validation passes, validationResult will be an object with validated data
        const game = {
            id: games.length + 1,
            title: validationResult.title
        };
        games.push(game);
        res.send(game);
    } catch (error) {
        // If validation fails, the error object will contain information about the validation error
        res.status(400).send(error);
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); const express = require('express');
const app = express();
const Joi = require('joi');


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
app.post('/api/games', async (req, res) => {
    const schema = Joi.object({
        title: Joi.string().min(2).required()
    });

    try {
        const validationResult = await schema.validateAsync(req.body);
        // If validation passes, validationResult will be an object with validated data
        const game = {
            id: games.length + 1,
            title: validationResult.title
        };
        games.push(game);
        res.send(game);
    } catch (error) {
        // If validation fails, the error object will contain information about the validation error
        res.status(400).send(error);
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
