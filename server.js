import express from 'express';
import logger from 'morgan';
import path from 'path';
import 'regenerator-runtime/runtime';
import Debug from 'debug';
import { config } from 'dotenv';

import Route from './server/routes/routes';

config();

const app = express();

app.use(logger('dev'));
const debug = Debug('http');
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to conference API'
  })
})

const router = express.Router();
app.use('/api/v1', Route(logger, router));

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => debug(`Server listening on port ${port}`));

export default app;