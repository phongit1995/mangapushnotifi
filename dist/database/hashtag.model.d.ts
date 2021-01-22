import * as mongoose from 'mongoose';
export declare const hashtagSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface HashTag extends mongoose.Document {
    name?: string;
    image?: string;
    hashtag?: Array<string>;
}
