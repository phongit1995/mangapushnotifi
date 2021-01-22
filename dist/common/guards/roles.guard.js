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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const user_model_1 = require("../../database/user.model");
const role_type_1 = require("../constants/role-type");
let RolesGuard = class RolesGuard {
    constructor(_reflector, jwtService) {
        this._reflector = _reflector;
        this.jwtService = jwtService;
    }
    canActivate(context) {
        let roles = this._reflector.get('roles', context.getHandler());
        if (!roles) {
            roles = [role_type_1.RoleType.MEMBER];
        }
        if ((roles === null || roles === void 0 ? void 0 : roles.length) == 0 || (roles === null || roles === void 0 ? void 0 : roles.includes(role_type_1.RoleType.MEMBER)) == true) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        let user = request.user;
        if (!user) {
            throw new common_1.HttpException("Not Permission", common_1.HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector,
        jwt_1.JwtService])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map