import { Router } from 'express';
import { getTitles } from './handlers';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('alive');
});

routes.get('/titles', (req, res) => {
  res.json(getTitles());
});

export default routes;