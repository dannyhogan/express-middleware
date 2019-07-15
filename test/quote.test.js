const quote = require('../lib/middleware/quote');

describe('quote middleware', () => {
  it('responds with random quote using GET /random', done => {
    const req = {};

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
