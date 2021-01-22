"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_result_1 = require("../../common/api-result");
const role_type_1 = require("../../common/constants/role-type");
const role_decorators_1 = require("../../common/decorators/role.decorators");
const user_decorators_1 = require("../../common/decorators/user.decorators");
const roles_guard_1 = require("../../common/guards/roles.guard");
const user_model_1 = require("../../database/user.model");
const post_dto_1 = require("./post.dto");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async createNewPostFollow(dataCreate, user) {
        const resultPost = await this.postService.createNewPostFollow(user._id, dataCreate.numberFollow);
        return (new api_result_1.ApiResult().success(resultPost));
    }
    async confirmFollowPost(user, dataConfirm) {
        const resultData = await this.postService.confirmPostFollower(user._id, dataConfirm.post_id);
        return (new api_result_1.ApiResult().success(resultData));
    }
    async listPostFollower(user, data) {
        const resultData = await this.postService.listPostFollower(user, data.numberItem);
        return (new api_result_1.ApiResult().success(resultData));
    }
    async skipPostUser(user, dataSkip) {
        const resultSkip = await this.postService.skipPostUser(user._id, dataSkip.post_id);
        return (new api_result_1.ApiResult().success(resultSkip));
    }
};
__decorate([
    common_1.Post("create-follower"),
    swagger_1.ApiOperation({ summary: "Create New Post Follow" }),
    swagger_1.ApiResponse({ status: 201, description: 'Create New Post Follow Success Fully.' }),
    swagger_1.ApiResponse({ status: 403, description: "You do not have enough coins ." }),
    role_decorators_1.Roles(role_type_1.RoleType.USER),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, common_1.Body()), __param(1, user_decorators_1.UserInfo()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.dtoCreatePostFollow, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createNewPostFollow", null);
__decorate([
    common_1.Post("confirm-follower"),
    swagger_1.ApiOperation({ summary: "Confirm Post Follow" }),
    swagger_1.ApiResponse({ status: 201, description: 'Confirm Post Follow Success Fully.' }),
    swagger_1.ApiResponse({ status: 302, description: 'Post Not Found.' }),
    swagger_1.ApiResponse({ status: 403, description: 'Can not follower your self.' }),
    role_decorators_1.Roles(role_type_1.RoleType.USER),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, user_decorators_1.UserInfo()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, post_dto_1.dtoConfirmFollowPost]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "confirmFollowPost", null);
__decorate([
    common_1.Post("list-post-follower"),
    swagger_1.ApiOperation({ summary: "Get List Post Follow" }),
    swagger_1.ApiResponse({ status: 201, description: 'Get List Post Follow Success Fully.' }),
    role_decorators_1.Roles(role_type_1.RoleType.MEMBER),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, user_decorators_1.UserInfo()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, post_dto_1.dtoGetListPostFollower]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "listPostFollower", null);
__decorate([
    common_1.Post("skip-post-user"),
    swagger_1.ApiOperation({ summary: "Skip Post User" }),
    swagger_1.ApiResponse({ status: 201, description: 'Skip Post User Success Fully.' }),
    role_decorators_1.Roles(role_type_1.RoleType.USER),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, user_decorators_1.UserInfo()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, post_dto_1.dtoSkipPostUser]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "skipPostUser", null);
PostController = __decorate([
    swagger_1.ApiTags("post"),
    swagger_1.ApiConsumes("Post Api"),
    swagger_1.ApiHeader({
        name: "token",
        description: 'token User',
    }),
    common_1.Controller('post'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map