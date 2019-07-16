const app = require('../lib/app');
const request = require('supertest');

describe('route tests', () => {
  it('can create a profile with post', () => {
    return request(app)
      .post('/profile')
      .send({ 'name': 'Danny', 'favoriteCharacter': 'Fry' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Danny',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

  it('can get a profile by its id', () => {
    return request(app)
      .get('/profile/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Danny',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

  it('can get all profiles using GET /profiles', () => {
    return request(app)
      .get('/profiles')
      .then(res => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  it('can update a profile by id using /patch', () => {
    return request(app)
      .patch('/profile/0')
      .send({ favoriteCharacter: 'Bender' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Danny',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String),
          quote: expect.any(Object)
        });
      });
  });

  it('can delete a profile/id using delete', () => {
    return request(app)
      .delete('/profile/0')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'Danny',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String),
          quote: expect.any(Object)
        }]);
      });
  });

});

