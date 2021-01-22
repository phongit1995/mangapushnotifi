import { RequestPromiseOptions } from 'request-promise';
export declare class RequestService {
    getMethod<T = any>(uri: string, options?: RequestPromiseOptions): Promise<T>;
    postMethod<T = any>(uri: string, options?: RequestPromiseOptions): Promise<T>;
}
