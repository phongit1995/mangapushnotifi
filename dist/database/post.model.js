"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = exports.POST_TYPE = void 0;
const mongoose = require("mongoose");
var POST_TYPE;
(function (POST_TYPE) {
    POST_TYPE["FOLLOW"] = "FOLLOW";
    POST_TYPE["LIKE"] = "LIKE";
})(POST_TYPE = exports.POST_TYPE || (exports.POST_TYPE = {}));
exports.postSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    type_post: {
        type: String,
        default: POST_TYPE.FOLLOW
    },
    user_target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    totalCount: {
        type: Number
    },
    balance: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true
    },
    user_active: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true });
//# sourceMappingURL=post.model.js.map