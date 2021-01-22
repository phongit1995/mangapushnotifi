"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseIdPipe = exports.MongooseId = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const mongoose = require("mongoose");
let MongooseId = class MongooseId {
    validate(text, args) {
        return mongoose.Types.ObjectId.isValid(text);
    }
    defaultMessage(args) {
        return "Not Found Mongoose Id";
    }
};
MongooseId = __decorate([
    class_validator_1.ValidatorConstraint({ async: false })
], MongooseId);
exports.MongooseId = MongooseId;
class MongooseIdPipe {
    async transform(value, { metatype }) {
        if (this.toValidate(value)) {
            return value;
        }
        throw new common_1.HttpException("Not Found Id Mongo", common_1.HttpStatus.BAD_REQUEST);
    }
    toValidate(value) {
        return mongoose.Types.ObjectId.isValid(value);
    }
}
exports.MongooseIdPipe = MongooseIdPipe;
//# sourceMappingURL=mongooseId.validation.js.map