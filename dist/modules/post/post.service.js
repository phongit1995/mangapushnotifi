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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const error_1 = require("../../common/constants/error");
const post_model_1 = require("../../database/post.model");
const user_model_1 = require("../../database/user.model");
let PostService = class PostService {
    constructor(postModel, userModel) {
        this.postModel = postModel;
        this.userModel = userModel;
    }
    async createNewPostFollow(user_id, numberFollow) {
        const userData = await this.userModel.findById(user_id);
        const priceData = numberFollow * 2;
        if (userData.coin < priceData) {
            throw new common_1.HttpException(error_1.ERROR_TYPE.YOU_DO_NOT_HAVE_ENOUGH_COIN, common_1.HttpStatus.FORBIDDEN);
        }
        userData.coin = userData.coin - priceData;
        userData.save();
        const ListPostResult = await this.postModel.find({ user_id: user_id, balance: { $gt: 0 } });
        if (ListPostResult.length > 0) {
            return this.postModel.create({
                user_id: user_id,
                user_target: user_id,
                totalCount: numberFollow,
                balance: numberFollow,
                status: false
            });
        }
        else {
            return this.postModel.create({
                user_id: user_id,
                user_target: user_id,
                totalCount: numberFollow,
                balance: numberFollow,
                status: true
            });
        }
    }
    async confirmPostFollower(user_id, post_id) {
        const postInfo = await this.postModel.findById(post_id);
        if (postInfo.user_id == user_id) {
            throw new common_1.HttpException(error_1.ERROR_TYPE.CAN_NOT_FOLLOW_YOUR_SELF, common_1.HttpStatus.FORBIDDEN);
        }
        if (!postInfo) {
            throw new common_1.HttpException(error_1.ERROR_TYPE.POST_NOT_FOUND, common_1.HttpStatus.FOUND);
        }
        if (postInfo.balance <= 0) {
            throw new common_1.HttpException(error_1.ERROR_TYPE.POST_NOT_FOUND, common_1.HttpStatus.FOUND);
        }
        const postDataUpdate = await this.postModel.findByIdAndUpdate(post_id, {
            $push: {
                user_active: { user_id: user_id }
            },
            $inc: { balance: -1 }
        }, { new: true });
        if (postDataUpdate.balance == 0) {
            await this.postModel.findByIdAndUpdate(post_id, { status: false });
            const listPostByUser = await this.postModel.find({ type_post: post_model_1.POST_TYPE.FOLLOW, balance: { $gt: 0 } }).sort({ balance: -1 });
            console.log(listPostByUser);
            if (listPostByUser.length > 0) {
                await this.postModel.findByIdAndUpdate(listPostByUser[0]._id, { status: true });
            }
        }
        await this.userModel.findByIdAndUpdate(user_id, {
            $push: {
                list_following: postInfo.user_id
            },
            $inc: { coin: 1 }
        });
    }
    async listPostFollower(user, numberItem) {
        if (!user) {
            return this.postModel.find({
                status: true
            }).populate({
                path: "user_id",
                select: "name image"
            }).sort({ createdAt: -1 }).limit(numberItem);
        }
        const userData = await this.userModel.findById(user._id);
        const listUserFollowing = [...userData.list_following, user._id, ...userData.skip_users];
        return this.postModel.find({
            status: true,
            user_target: { $nin: listUserFollowing }
        }).populate({
            path: "user_id",
            select: "name image"
        }).sort({ createdAt: -1 }).limit(numberItem);
    }
    async skipPostUser(user_id, post_id) {
        const post = await this.postModel.findById(post_id);
        if (!post) {
            throw new common_1.HttpException(error_1.ERROR_TYPE.POST_NOT_FOUND, common_1.HttpStatus.FOUND);
        }
        return this.userModel.findByIdAndUpdate(user_id, {
            $addToSet: { skip_users: post.user_target }
        });
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('post')),
    __param(1, mongoose_1.InjectModel('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map