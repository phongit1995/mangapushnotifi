"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
const cache_manger_1 = require("./cache.manger");
class CacheService {
    constructor() {
        this.get = async (cacheKey, cacheMissCallback, ttl) => {
            let value = this.cache.get(cacheKey);
            if (value)
                return value;
            if (cacheMissCallback) {
                console.log('cache miss ' + cacheKey);
                value = await cacheMissCallback();
                this.set(cacheKey, value, ttl);
            }
            return value;
        };
        this.getSync = (cacheKey, cacheMissCallback, ttl) => {
            let value = this.cache.get(cacheKey);
            if (value)
                return value;
            if (cacheMissCallback) {
                console.log('cache miss ' + cacheKey);
                value = cacheMissCallback();
                this.set(cacheKey, value, ttl);
            }
            return value;
        };
        this.set = (cacheKey, value, ttl) => {
            this.cache.set(cacheKey, value, ttl);
        };
        this.delStartWith = (keyStartStr = '') => {
            if (!keyStartStr)
                return;
            const keys = this.cache.keys();
            for (const key of keys) {
                if (key.indexOf(keyStartStr) === 0) {
                    this.del(key);
                }
            }
        };
        this.del = (cacheKeys) => {
            this.cache.del(cacheKeys);
        };
        this.flush = () => {
            this.cache.flushAll();
        };
        this.cache = new cache_manger_1.CacheManager();
    }
}
exports.CacheService = CacheService;
//# sourceMappingURL=cache.service.js.map