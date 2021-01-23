"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historySchema = void 0;
const mongoose = require("mongoose");
exports.historySchema = new mongoose.Schema({
    IndexName: {
        type: String
    },
    Chapter: {
        type: Number
    }
}, { timestamps: true });
//# sourceMappingURL=history.js.map