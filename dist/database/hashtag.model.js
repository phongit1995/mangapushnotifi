"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashtagSchema = void 0;
const mongoose = require("mongoose");
exports.hashtagSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String,
    },
    hashtag: [
        {
            type: String
        }
    ]
}, { timestamps: true });
//# sourceMappingURL=hashtag.model.js.map