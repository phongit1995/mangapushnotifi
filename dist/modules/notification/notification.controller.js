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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_result_1 = require("../../common/api-result");
const notification_dto_1 = require("./notification.dto");
const notification_service_1 = require("./notification.service");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async testNotification(data) {
        const result = await this.notificationService.testPushToTopic(data.topic);
        return new api_result_1.ApiResult().success(JSON.parse(result));
    }
};
__decorate([
    common_1.Post('test-notification-topic'),
    swagger_1.ApiOperation({ summary: "Create New Comment" }),
    swagger_1.ApiResponse({ status: 201, description: 'Create New Comment Success Fully.' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_dto_1.dtoTestNotification]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "testNotification", null);
NotificationController = __decorate([
    swagger_1.ApiTags("Notification"),
    swagger_1.ApiConsumes("Notification Api"),
    swagger_1.ApiHeader({
        name: "token",
        description: 'token User',
    }),
    common_1.Controller('notification'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map