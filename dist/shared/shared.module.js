"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ShareModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const exceptions_filter_1 = require("../common/exceptions.filter");
const config_service_1 = require("./services/config.service");
const cache_service_1 = require("./services/cache/cache.service");
const request_service_1 = require("./services/request.service");
const jwt_1 = require("@nestjs/jwt");
const push_service_1 = require("./services/push.service");
const providers = [config_service_1.ConfigServer, cache_service_1.CacheService, request_service_1.RequestService, push_service_1.FcmPushService];
let ShareModule = ShareModule_1 = class ShareModule {
};
ShareModule = ShareModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [
            ...providers,
            {
                provide: core_1.APP_FILTER,
                useClass: exceptions_filter_1.AllExceptionsFilter
            }
        ],
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [ShareModule_1],
                useFactory: async (config) => ({
                    secret: config.jwtSecret
                }),
                inject: [config_service_1.ConfigServer]
            }),
        ],
        exports: [...providers, jwt_1.JwtModule]
    })
], ShareModule);
exports.ShareModule = ShareModule;
//# sourceMappingURL=shared.module.js.map