"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResult = exports.ApiStatus = void 0;
const common_1 = require("@nestjs/common");
var ApiStatus;
(function (ApiStatus) {
    ApiStatus["SUCCESS"] = "success";
    ApiStatus["ERROR"] = "error";
})(ApiStatus = exports.ApiStatus || (exports.ApiStatus = {}));
class ApiResult {
    constructor() {
        this.status = ApiStatus.ERROR;
    }
    success(data, message) {
        this.status = ApiStatus.SUCCESS;
        this.code = common_1.HttpStatus.OK;
        if (message) {
            this.message = 'OK';
        }
        this.data = data;
        return this;
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    error(message, code = 400, errorCode) {
        this.status = ApiStatus.ERROR;
        this.errorCode = errorCode;
        this.message = message;
        this.code = code;
        return this;
    }
}
exports.ApiResult = ApiResult;
//# sourceMappingURL=api-result.js.map