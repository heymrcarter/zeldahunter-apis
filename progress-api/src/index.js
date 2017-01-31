import app from './app';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env.sample'
});

const { PORT = 80 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}`)); // eslint-disable-line no-console