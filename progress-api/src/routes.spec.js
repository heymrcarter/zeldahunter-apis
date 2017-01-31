import request from 'supertest';
import app from './app';


describe('routes', () => {
  describe('/', () => {
    it('should be alive and return 200', async () => {
      await request(app).get('/').expect(200, 'alive');
    });
  });

  describe('/progress/:titleId', () => {
    it('should return a 200', async () => {
      await request(app).get('/progress/the-legend-of-zelda')
        .expect(200);
    });
  });
});
