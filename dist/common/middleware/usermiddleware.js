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
exports.RequestCheckMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_service_1 = require("../../shared/services/config.service");
const TIME_EXPRIED = 1000 * 60 * 2;
let RequestCheckMiddleware = class RequestCheckMiddleware {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async use(req, res, next) {
        var _a;
        const token = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.token;
        if (token) {
            try {
                let user = this.jwtService.decode(token);
                req.user = user;
            }
            catch (error) {
                console.log('loi' + error);
            }
        }
        next();
    }
};
RequestCheckMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], RequestCheckMiddleware);
exports.RequestCheckMiddleware = RequestCheckMiddleware;
//# sourceMappingURL=usermiddleware.js.map