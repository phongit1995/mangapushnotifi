import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from 'src/database/user.model';
import { RequestService } from 'src/shared/services/request.service';
export declare class UserService {
    private readonly userModel;
    private requestService;
    private jwtService;
    constructor(userModel: Model<User>, requestService: RequestService, jwtService: JwtService);
    loginUserData(name: string): Promise<Pick<Pick<import("mongoose")._LeanDocument<User>, "_id" | "__v" | "id" | "app_id" | "name" | "nickname" | "image" | "tiktok_id" | "coin" | "followerCount" | "followingCount" | "list_following" | "token" | "skip_users">, "_id" | "__v" | "id" | "app_id" | "name" | "nickname" | "image" | "tiktok_id" | "coin" | "followerCount" | "followingCount" | "list_following" | "token" | "skip_users">>;
    getMeInfo(user_id: string): Promise<User>;
    private imageSrcToBase64;
    private getDataUserByName;
}
