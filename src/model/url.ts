import { getModelForClass, prop } from '@typegoose/typegoose';

export class URL {
    @prop({ require: true })
    public hash?: string;

    @prop({ required: true })
    public urlOrigin?: string;

    @prop({ required: true })
    public urlShorted?: string;
}

export const UrlModel = getModelForClass(URL);