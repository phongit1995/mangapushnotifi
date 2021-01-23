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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const history_1 = require("../../database/history");
const push_service_1 = require("../../shared/services/push.service");
let NotificationService = class NotificationService {
    constructor(pushService, historyModel) {
        this.pushService = pushService;
        this.historyModel = historyModel;
    }
    async testPushToTopic(topic) {
        return this.pushService.sendMessage({
            to: "/topics/" + topic,
            notification: {
                title: "Hello",
                body: "Hello"
            }
        });
    }
    async sendNotificationToTopic(data) {
        const historyData = await this.historyModel.findOne({
            IndexName: data.IndexName,
            Chapter: data.Chapter
        });
        const chapterString = data.Chapter.toString().slice(1, -1).replace(/0/g, "");
        if (historyData) {
            return null;
        }
        await this.historyModel.create({
            IndexName: data.IndexName,
            Chapter: data.Chapter
        });
        await this.pushService.sendMessage({
            to: "/topics/" + data.IndexName,
            notification: {
                title: "",
                body: `${data.SeriesName} - chapter ${chapterString}`
            }
        });
    }
};
NotificationService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel('history')),
    __metadata("design:paramtypes", [push_service_1.FcmPushService,
        mongoose_2.Model])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map