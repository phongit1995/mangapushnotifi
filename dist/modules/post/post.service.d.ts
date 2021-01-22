import { Model } from 'mongoose';
import { Post } from 'src/database/post.model';
import { User } from 'src/database/user.model';
export declare class PostService {
    private readonly postModel;
    private readonly userModel;
    constructor(postModel: Model<Post>, userModel: Model<User>);
    createNewPostFollow(user_id: string, numberFollow: number): Promise<Post>;
    confirmPostFollower(user_id: string, post_id: string): Promise<void>;
    listPostFollower(user: User, numberItem: number): Promise<Post[]>;
    skipPostUser(user_id: string, post_id: string): Promise<User>;
}
