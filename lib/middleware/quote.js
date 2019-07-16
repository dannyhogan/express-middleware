const { getQuoteByCharacter } = require('../services/futuramaApi');

module.exports = (req, res, next) => {
  return getQuoteByCharacter(req.body.favoriteCharacter, 1)
    .then(([quote]) => {
      req.quote = quote;
      next();
    });
};
