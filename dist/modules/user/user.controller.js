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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_result_1 = require("../../common/api-result");
const role_type_1 = require("../../common/constants/role-type");
const role_decorators_1 = require("../../common/decorators/role.decorators");
const user_dto_1 = require("./user.dto");
const user_service_1 = require("./user.service");
const roles_guard_1 = require("../../common/guards/roles.guard");
const user_decorators_1 = require("../../common/decorators/user.decorators");
const user_model_1 = require("../../database/user.model");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async loginUser(dataLogin) {
        const user = await this.userService.loginUserData(dataLogin.name);
        return (new api_result_1.ApiResult().success(user));
    }
    async getMeInfo(user) {
        const userData = await this.userService.getMeInfo(user._id);
        return (new api_result_1.ApiResult().success(userData));
    }
};
__decorate([
    common_1.Post("login"),
    swagger_1.ApiOperation({ summary: "Login User By Name" }),
    swagger_1.ApiResponse({ status: 201, description: 'Login User Success Fully.' }),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.dtoLoginUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    common_1.Get('me'),
    swagger_1.ApiOperation({ summary: "Get Me Info" }),
    swagger_1.ApiResponse({ status: 201, description: 'Get Me Info User Success Fully.' }),
    role_decorators_1.Roles(role_type_1.RoleType.USER),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, user_decorators_1.UserInfo()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMeInfo", null);
UserController = __decorate([
    swagger_1.ApiTags("user"),
    swagger_1.ApiHeader({
        name: 'token',
        description: 'token user',
    }),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map