import * as mongoose from 'mongoose';
export declare const userSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface User extends mongoose.Document {
    app_id?: string;
    name?: string;
    nickname?: string;
    image?: string;
    tiktok_id?: string;
    coin?: number;
    followerCount?: number;
    followingCount?: number;
    list_following?: Array<string>;
    token?: string;
    skip_users?: Array<string>;
}
