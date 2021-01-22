export interface ICacheManager {
    get(key: string): any;
    set(key: string, value: any, ttl?: number): any;
    del(keys: string | string[]): any;
    keys(): string[];
    flushAll(): any;
}
export declare class CacheManager implements ICacheManager {
    private cache;
    private timeDefault;
    get(key: string): any;
    set(key: string, value: any, ttl?: number): void;
    del(keys: string | string[]): void;
    keys(): string[];
    flushAll(): void;
}
