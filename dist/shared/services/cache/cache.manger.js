"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
const NodeCache = require("node-cache");
class CacheManager {
    constructor() {
        this.cache = new NodeCache();
        this.timeDefault = 1000 * 60 * 60;
    }
    get(key) {
        return this.cache.get(key);
    }
    set(key, value, ttl) {
        this.cache.set(key, value, ttl || this.timeDefault);
    }
    del(keys) {
        this.cache.del(keys);
    }
    keys() {
        return this.cache.keys();
    }
    flushAll() {
        this.cache.flushAll();
    }
}
exports.CacheManager = CacheManager;
//# sourceMappingURL=cache.manger.js.map