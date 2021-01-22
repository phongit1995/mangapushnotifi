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
exports.dtoSkipPostUser = exports.dtoGetListPostFollower = exports.dtoConfirmFollowPost = exports.dtoCreatePostFollow = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class dtoCreatePostFollow {
}
__decorate([
    swagger_1.ApiProperty({ description: "Number Follower Buy" }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], dtoCreatePostFollow.prototype, "numberFollow", void 0);
exports.dtoCreatePostFollow = dtoCreatePostFollow;
class dtoConfirmFollowPost {
}
__decorate([
    swagger_1.ApiProperty({ description: "Post Id Follower" }),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], dtoConfirmFollowPost.prototype, "post_id", void 0);
exports.dtoConfirmFollowPost = dtoConfirmFollowPost;
class dtoGetListPostFollower {
}
__decorate([
    swagger_1.ApiProperty({ description: "Number Item Post" }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], dtoGetListPostFollower.prototype, "numberItem", void 0);
exports.dtoGetListPostFollower = dtoGetListPostFollower;
class dtoSkipPostUser {
}
__decorate([
    swagger_1.ApiProperty({ description: "Number Item Post" }),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], dtoSkipPostUser.prototype, "post_id", void 0);
exports.dtoSkipPostUser = dtoSkipPostUser;
//# sourceMappingURL=post.dto.js.map