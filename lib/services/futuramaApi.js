const request = require('superagent');

const getQuoteByCharacter = (character, count) => {
  return request(`futuramaapi.herokuapp.com/api/characters/${character}/${count} `)
    .then(res => res.body);
};

module.exports = {
  getQuoteByCharacter
};
