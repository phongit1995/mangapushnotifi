import * as mongoose from 'mongoose';
export declare const historySchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface History extends mongoose.Document {
    IndexName?: string;
    Chapter?: number;
}
