"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
const requestPromise = require("request-promise");
class RequestService {
    async getMethod(uri, options) {
        return await requestPromise.get(uri, options).promise();
    }
    async postMethod(uri, options) {
        return await requestPromise.post(uri, options).promise();
    }
}
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map