"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    app_id: {
        type: String
    },
    nickname: {
        type: String,
    },
    name: {
        type: String
    },
    image: {
        type: String,
    },
    tiktok_id: {
        type: String
    },
    coin: {
        type: Number,
        default: 10
    },
    followerCount: {
        type: Number,
        default: 0
    },
    followingCount: {
        type: Number,
        default: 0
    },
    list_following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    skip_users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
}, { timestamps: true });
//# sourceMappingURL=user.model.js.map