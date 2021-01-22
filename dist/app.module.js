"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const shared_module_1 = require("./shared/shared.module");
const usermiddleware_1 = require("./common/middleware/usermiddleware");
const notification_module_1 = require("./modules/notification/notification.module");
const cronjob_module_1 = require("./modules/cronjob/cronjob.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(usermiddleware_1.RequestCheckMiddleware)
            .forRoutes("*");
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.ShareModule,
            notification_module_1.NotificationModule,
            cronjob_module_1.CronjobModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map