import  * as NodeCache from 'node-cache';
export interface ICacheManager {
    get(key: string): any;
    set(key: string, value: any, ttl?: number);
    del(keys: string | string[]);
    keys(): string[];
    flushAll();
}
export class CacheManager implements ICacheManager {
    private cache = new NodeCache();
    private timeDefault:number=1000*60*60;
    get(key: string): any {
        return this.cache.get(key);
    }
    set(key: string, value: any, ttl?: number) {
        this.cache.set(key, value, ttl||this.timeDefault);
    }

    del(keys: string | string[]) {
        this.cache.del(keys);
    }

    keys(): string[] {
        return this.cache.keys();
    }

    flushAll() {
        this.cache.flushAll();
    }
}