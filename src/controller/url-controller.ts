import { Request, Response } from "express";
import { nanoid } from 'nanoid';
import { config } from "../config/constants";
import { UrlModel } from "../model/url";

export class UrlController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { urlOrigin } = req.body;
        const url = await UrlModel.findOne({ urlOrigin });

        if (url) {
            res.json(url);
            return;
        }

        const hash = nanoid(7);
        const urlShort = `${config.API_URL}/${hash}`;
        const newUrl = await UrlModel.create({ hash, urlShort, urlOrigin });
        res.json(newUrl);


    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params;
        const url = await UrlModel.findOne({ hash });
        if (url) {
            res.redirect(url.urlOrigin);
            return;
        }
        res.status(400).json({ error: 'URL not found' });
    }
}