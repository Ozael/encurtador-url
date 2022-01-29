import express, { json, Request, Response } from 'express';
import { config } from './config/constants';
import { UrlController } from './controller/url-controller';

const app = express();
app.use(express.json());

const urlController = new UrlController();
app.post('/shorten', urlController.shorten);

app.get('/:hash', urlController.redirect);






app.listen(5000, () => console.log(`App running... ${config.API_URL}`));