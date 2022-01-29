import { getModelForClass, prop } from '@typegoose/typegoose';

export class URL {
    @prop({ require: true })
    hash?: string;

    @prop({ required: true })
    urlOrigin?: string;

    @prop({ required: true })
    urlShorted?: string;
}

export const UrlModel = getModelForClass(URL);