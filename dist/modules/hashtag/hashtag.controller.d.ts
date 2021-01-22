import { ApiResult } from 'src/common/api-result';
import { dtoCreateNewHashTag, dtoUpdateHashTag } from './hashtag.dto';
import { HashtagService } from './hashtag.service';
export declare class HashtagController {
    private hashtagService;
    constructor(hashtagService: HashtagService);
    createNewHashtag(data: dtoCreateNewHashTag): Promise<ApiResult<unknown>>;
    getListHashtag(): Promise<ApiResult<unknown>>;
    updateHashTagInfo(dataUpdate: dtoUpdateHashTag): Promise<ApiResult<unknown>>;
}
