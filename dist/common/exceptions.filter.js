"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        try {
            const status = exception.getStatus();
            const message = exception.message;
            if (exception.response) {
                response.status(status).json({
                    code: status,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                    message: (typeof exception.response == "string" || typeof exception.response.message == "string" ?
                        typeof exception.response == "string" ? exception.response : exception.response.message : "Validation Fail :" + exception.response.message.join(","))
                });
            }
            else {
                response.status(status).json({
                    code: status,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                    message: message
                });
            }
        }
        catch (_a) {
            response.status(400).json({
                code: 400,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: exception.stack
            });
        }
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=exceptions.filter.js.map