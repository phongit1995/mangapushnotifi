"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const post_controller_1 = require("./post.controller");
const mongoose_1 = require("@nestjs/mongoose");
const post_model_1 = require("../../database/post.model");
const user_model_1 = require("../../database/user.model");
let PostModule = class PostModule {
};
PostModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "post", schema: post_model_1.postSchema }, { name: "user", schema: user_model_1.userSchema }])
        ],
        providers: [post_service_1.PostService],
        controllers: [post_controller_1.PostController]
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map