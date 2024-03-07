import { config } from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import router from './routes';

const { PORT, NODE_ENV } = process.env;

config({ path: `.env.${NODE_ENV}` });
const port = PORT || 8888;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
  console.log(`${NODE_ENV} app listening on PORT ${port}`);
});
