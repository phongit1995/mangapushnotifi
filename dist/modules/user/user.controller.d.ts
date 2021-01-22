import { ApiResult } from 'src/common/api-result';
import { dtoLoginUser } from './user.dto';
import { UserService } from './user.service';
import { User } from 'src/database/user.model';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    loginUser(dataLogin: dtoLoginUser): Promise<ApiResult<unknown>>;
    getMeInfo(user: User): Promise<ApiResult<unknown>>;
}
