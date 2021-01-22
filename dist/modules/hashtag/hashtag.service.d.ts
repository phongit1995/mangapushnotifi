import { Model } from 'mongoose';
import { HashTag } from 'src/database/hashtag.model';
export declare class HashtagService {
    private readonly hashtagModel;
    constructor(hashtagModel: Model<HashTag>);
    createHashtag(name: string, hashtag: string, image?: string): Promise<HashTag>;
    getListHashTag(): Promise<HashTag[]>;
    updateHashTag(id: string, image: string): Promise<HashTag>;
}
