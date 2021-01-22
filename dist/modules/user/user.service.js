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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const error_1 = require("../../common/constants/error");
const user_model_1 = require("../../database/user.model");
const request_service_1 = require("../../shared/services/request.service");
const base64Img = require("base64-img-promise");
let UserService = class UserService {
    constructor(userModel, requestService, jwtService) {
        this.userModel = userModel;
        this.requestService = requestService;
        this.jwtService = jwtService;
    }
    async loginUserData(name) {
        let userData = await this.userModel.findOne({ name: name });
        let resultDataGetName = await this.getDataUserByName(name);
        const imageBase = await this.imageSrcToBase64(resultDataGetName.user.avatarThumb);
        resultDataGetName.user.avatarThumb = imageBase;
        if (!userData) {
            userData = await this.userModel.create({
                name: resultDataGetName.user.uniqueId,
                nickname: resultDataGetName.user.nickname,
                tiktok_id: resultDataGetName.user.id,
                image: resultDataGetName.user.avatarThumb,
                followerCount: resultDataGetName.stats.followerCount,
                followingCount: resultDataGetName.stats.followingCount
            });
        }
        let userObject = userData.toObject();
        let userInfo = Object.assign({}, userObject);
        delete userInfo.image;
        userObject.token = this.jwtService.sign({ _id: userInfo._id });
        return userObject;
    }
    async getMeInfo(user_id) {
        const user = await this.userModel.findById(user_id);
        if (!user) {
            throw new common_1.HttpException(error_1.ERROR_TYPE.USER_NOT_FOUND, common_1.HttpStatus.CONFLICT);
        }
        let resultDataGetName = await this.getDataUserByName(user.name);
        user.nickname = resultDataGetName.user.nickname;
        user.followerCount = resultDataGetName.stats.followerCount;
        user.followingCount = resultDataGetName.stats.followingCount;
        await user.save();
        return user;
    }
    async imageSrcToBase64(url) {
        const result = await base64Img.requestBase64(url);
        return result.data;
    }
    async getDataUserByName(name) {
        try {
            let result = await this.requestService.getMethod(`https://www.tiktok.com/@${name}`, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
                }
            });
            let regexUser = new RegExp(/(?=props).*(?=,"appGip)/g);
            const resultRegex = regexUser.exec(result);
            const stringData = `{"${resultRegex[0]}}`;
            const dataParse = JSON.parse(stringData);
            return dataParse.props.pageProps.userInfo;
        }
        catch (error) {
            throw new Error(error_1.ERROR_TYPE.NAME_NOT_FOUND);
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("user")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        request_service_1.RequestService,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map