import request from 'supertest';
import app from './app';
import titles from './titles';

describe('/', () => {
  it('should be alive and return 200', async () => {
    await request(app).get('/').expect(200, 'alive');
  });
});

describe('/titles', () => {
  it('should return all 17 titles', async () => {  
    await request(app).get('/titles').expect(200, titles);
  });
});