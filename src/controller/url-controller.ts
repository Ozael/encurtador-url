import { Request, Response } from "express";
import { nanoid } from 'nanoid';
import { config } from "../config/constants";

export class UrlController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { urlOrigin } = req.body;
        const hash = nanoid(7);
        const urlShort = `${config.API_URL}/${hash}`;

        res.json({ urlOrigin, hash, urlShort });
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params;
        const url = {
            urlOrigin: 'https://www.youtube.com/watch?v=UWYPTui1wCc',
            hash: 'ifBaChY',
            urlShorted: 'http://localhost:5000/ifBaChY'
        };

        res.redirect(url.urlOrigin);
    }
}