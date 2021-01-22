import { CacheManager } from './cache.manger';
export declare class CacheService {
    constructor();
    cache: CacheManager;
    get: <T = unknown>(cacheKey: string, cacheMissCallback?: () => Promise<T>, ttl?: number) => Promise<T>;
    getSync: <T = unknown>(cacheKey: string, cacheMissCallback?: () => T, ttl?: number) => T;
    set: (cacheKey: string, value: any, ttl?: number) => void;
    delStartWith: (keyStartStr?: string) => void;
    del: (cacheKeys: string | string[]) => void;
    flush: () => void;
}
