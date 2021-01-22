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
exports.dtoUpdateHashTag = exports.dtoCreateNewHashTag = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class dtoCreateNewHashTag {
}
__decorate([
    swagger_1.ApiProperty({ description: "name" }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], dtoCreateNewHashTag.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ description: "images" }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], dtoCreateNewHashTag.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty({ description: "name" }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], dtoCreateNewHashTag.prototype, "hashtag", void 0);
exports.dtoCreateNewHashTag = dtoCreateNewHashTag;
class dtoUpdateHashTag {
}
__decorate([
    swagger_1.ApiProperty({ description: "Id Hash Tag" }),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], dtoUpdateHashTag.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ description: "Image" }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], dtoUpdateHashTag.prototype, "image", void 0);
exports.dtoUpdateHashTag = dtoUpdateHashTag;
//# sourceMappingURL=hashtag.dto.js.map