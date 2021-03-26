const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig')

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

it('process.env.DB_ENV must be "testing', () => {
  expect(process.env.NODE_ENV).toBe('testing');
  });

  // describe('[POST] /users', () => {
  //   it ('responds with a new user', async () => {
  //     const res = await request(server).post('/users')
  //     .send({ username: 'Captin Marvel' })
  //     expect(res.body).toMatchObject({ id: 1, username: 'Captain Marvel'})
  //   })
  // })
