import * as mongoose from 'mongoose';
export declare enum POST_TYPE {
    FOLLOW = "FOLLOW",
    LIKE = "LIKE"
}
export declare const postSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface Post extends mongoose.Document {
    user_id?: string;
    user_target?: string;
    type_post?: string;
    totalCount?: number;
    balance?: number;
    status?: boolean;
    user_active?: Array<{
        user_id: string;
        createdAt?: Date;
    }>;
}
