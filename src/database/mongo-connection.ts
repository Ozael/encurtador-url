import mongoose from 'mongoose';
import { config } from '../config/constants';


export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_URL);
            console.log('database connected');
        } catch (err) {
            console.error(err);
        }
    }
}