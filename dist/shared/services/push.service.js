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
exports.FcmPushService = void 0;
const common_1 = require("@nestjs/common");
const fcmPush = require("fcm-push");
const config_service_1 = require("./config.service");
let FcmPushService = class FcmPushService {
    constructor(configServer) {
        this.configServer = configServer;
        console.log(configServer.push_key);
        this.fcm = new fcmPush(configServer.push_key);
    }
    async sendMessage(message) {
        return this.fcm.send(message, function (err, response) {
            if (err) {
                console.log(err);
                console.log("Push Notification False");
            }
            else {
                console.log(response);
            }
        });
    }
};
FcmPushService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigServer])
], FcmPushService);
exports.FcmPushService = FcmPushService;
//# sourceMappingURL=push.service.js.map