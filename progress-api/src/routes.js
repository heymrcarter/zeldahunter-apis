import { Router } from 'express';
import map from './progress-map';

const routes = Router();

routes.get('/', (req, res) => res.send('alive'));
routes.get('/progress/:titleId', (req, res) => {
  res.json(map(req.params.titleId))  
});

export default routes;