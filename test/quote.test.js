const quote = require('../lib/middleware/quote');

describe('can get random quote', () => {
  it('attaches quote to profile based off favoriteCharacter', done => {
    const req = {
      body: {
        name: 'Danny',
        favoriteCharacter: 'Fry'
      }
    };

    const next = () => {
      expect(req.quote).toEqual({
        character: expect.any(String),
        quote: expect.any(String),
        image: expect.any(String)
      });
      done();
    };

    quote(req, {}, next);
  });
});
