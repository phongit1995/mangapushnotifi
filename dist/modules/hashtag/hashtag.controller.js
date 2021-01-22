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
exports.HashtagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_result_1 = require("../../common/api-result");
const role_type_1 = require("../../common/constants/role-type");
const role_decorators_1 = require("../../common/decorators/role.decorators");
const roles_guard_1 = require("../../common/guards/roles.guard");
const hashtag_dto_1 = require("./hashtag.dto");
const hashtag_service_1 = require("./hashtag.service");
let HashtagController = class HashtagController {
    constructor(hashtagService) {
        this.hashtagService = hashtagService;
    }
    async createNewHashtag(data) {
        const result = await this.hashtagService.createHashtag(data.name, data.hashtag, data.image);
        return (new api_result_1.ApiResult().success(result));
    }
    async getListHashtag() {
        const listData = await this.hashtagService.getListHashTag();
        return (new api_result_1.ApiResult().success(listData));
    }
    async updateHashTagInfo(dataUpdate) {
        const result = await this.hashtagService.updateHashTag(dataUpdate.id, dataUpdate.image);
        return (new api_result_1.ApiResult().success(result));
    }
};
__decorate([
    common_1.Post("create-new"),
    swagger_1.ApiOperation({ summary: "Create New HashTag" }),
    swagger_1.ApiResponse({ status: 201, description: 'Create New HashTag Success Fully.' }),
    role_decorators_1.Roles(role_type_1.RoleType.MEMBER),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hashtag_dto_1.dtoCreateNewHashTag]),
    __metadata("design:returntype", Promise)
], HashtagController.prototype, "createNewHashtag", null);
__decorate([
    common_1.Get("get-list"),
    swagger_1.ApiOperation({ summary: "Get List HashTag" }),
    role_decorators_1.Roles(role_type_1.RoleType.MEMBER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HashtagController.prototype, "getListHashtag", null);
__decorate([
    common_1.Post("update-hashtag"),
    swagger_1.ApiOperation({ summary: "Update hashtag " }),
    swagger_1.ApiResponse({ status: 201, description: 'Update hashtag Success Fully.' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hashtag_dto_1.dtoUpdateHashTag]),
    __metadata("design:returntype", Promise)
], HashtagController.prototype, "updateHashTagInfo", null);
HashtagController = __decorate([
    swagger_1.ApiTags("hashtag"),
    swagger_1.ApiConsumes("hashtag Api"),
    swagger_1.ApiHeader({
        name: "token",
        description: 'token User',
    }),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Controller('hashtag'),
    __metadata("design:paramtypes", [hashtag_service_1.HashtagService])
], HashtagController);
exports.HashtagController = HashtagController;
//# sourceMappingURL=hashtag.controller.js.map