const { Router } = require('express');
const quote = require('../middleware/quote');

const profiles = [];

module.exports = Router()
  .get('/random', quote, (req, res) => {
    res.send(req.quote);
  })

  .post('/profile', quote, (req, res) => {
    const {
      name,
      favoriteCharacter
    } = req.body;

    const profile = {
      name,
      favoriteCharacter,
      tagline: req.quote.quote
    };

    profiles.push(profile);
    res.send(profile);
  })

  .get('/profiles', (req, res) => {
    res.send(profiles);
  })

  .get('/profile/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .delete('/profile/:id', (req, res) => {
    const deleted = profiles.splice(req.params.id, 1);
    res.send(deleted);
  })

  .patch('/profile/:id', quote, (req, res) => {
    const { favoriteCharacter } = req.body;
    const quote = req.quote;

    const profile = profiles[req.params.id];

    const updated = {
      ...profile,
      favoriteCharacter,
      quote
    };
    
    profiles[req.params.id] = updated;
    res.send(updated);
  });
