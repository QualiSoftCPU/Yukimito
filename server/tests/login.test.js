const request = require('supertest');
const app = require('../../client/src/App'); 

describe('Login endpoint', () => {
  it('should redirect to the landing page on successful login', async () => {
    const response = await request(app)
    const { username, password } = req.body
      .post('../../client/src/pages/PetOwnerLogin')
      .send({
        username: username,
        password: password,
      });

    expect(response.statusCode).toBe(302); 
    expect(response.headers.location).toBe('../../client/src/pages/LandingPage');
  });

  //Add more test cases
});