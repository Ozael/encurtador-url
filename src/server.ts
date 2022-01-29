import express, { json, Request, Response } from 'express';
import { config } from './config/constants';
import { UrlController } from './controller/url-controller';
import { MongoConnection } from './database/mongo-connection';

const app = express();
app.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new UrlController();
app.post('/shorten', urlController.shorten);

app.get('/:hash', urlController.redirect);






app.listen(5000, () => console.log(`App running... ${config.API_URL}`));