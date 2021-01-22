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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronjobService = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("../notification/notification.service");
const cheerio = require("cheerio");
const request_service_1 = require("../../shared/services/request.service");
let CronjobService = class CronjobService {
    constructor(notificationService, requestService) {
        this.notificationService = notificationService;
        this.requestService = requestService;
        this.URL_WEBSITE = "https://mangasee123.com/";
    }
    async handleJob() {
        console.log("Phong");
        const resutlFetch = await this.requestService.getMethod(this.URL_WEBSITE);
        const $ = cheerio.load(resutlFetch);
        console.log($(".BoxBody.LatestChapters>.row .Chapter").length);
    }
};
CronjobService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        request_service_1.RequestService])
], CronjobService);
exports.CronjobService = CronjobService;
//# sourceMappingURL=cronjob.service.js.map