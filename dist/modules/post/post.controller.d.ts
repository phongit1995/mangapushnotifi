import { ApiResult } from 'src/common/api-result';
import { User } from 'src/database/user.model';
import { dtoConfirmFollowPost, dtoCreatePostFollow, dtoGetListPostFollower, dtoSkipPostUser } from './post.dto';
import { PostService } from './post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    createNewPostFollow(dataCreate: dtoCreatePostFollow, user: User): Promise<ApiResult<unknown>>;
    confirmFollowPost(user: User, dataConfirm: dtoConfirmFollowPost): Promise<ApiResult<unknown>>;
    listPostFollower(user: User, data: dtoGetListPostFollower): Promise<ApiResult<unknown>>;
    skipPostUser(user: User, dataSkip: dtoSkipPostUser): Promise<ApiResult<unknown>>;
}
