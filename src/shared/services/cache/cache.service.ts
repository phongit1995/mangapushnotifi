
import {CacheManager} from './cache.manger';
export class CacheService {
    constructor(){
        this.cache = new CacheManager();
    }
    cache:CacheManager;
    public get = async <T = unknown>(cacheKey: string, cacheMissCallback?: () => Promise<T>, ttl?: number): Promise<T> => {
        let value = this.cache.get(cacheKey)
        if (value) return value;
        if (cacheMissCallback) {
            console.log('cache miss ' + cacheKey);
            value = await cacheMissCallback();
            this.set(cacheKey, value, ttl);
        }
        return value;
    } 
    public getSync = <T = unknown>(cacheKey: string, cacheMissCallback?: () => T, ttl?: number): T => {
        let value = this.cache.get(cacheKey)
        if (value) return value;

        if (cacheMissCallback) {
            console.log('cache miss ' + cacheKey);
            value = cacheMissCallback();
            this.set(cacheKey, value, ttl);
        }

        return value;
    }
    public set = (cacheKey: string, value: any, ttl?: number) => {
        this.cache.set(cacheKey, value, ttl);
    }
    public delStartWith = (keyStartStr: string = '') => {
        if (!keyStartStr) return;

        const keys = this.cache.keys();
        for (const key of keys) {
            if (key.indexOf(keyStartStr) === 0) {
                this.del(key);
            }
        }
    }
    public del = (cacheKeys: string | string[]) => {
        this.cache.del(cacheKeys);
    }
    public flush = () => {
        this.cache.flushAll();
    }


}