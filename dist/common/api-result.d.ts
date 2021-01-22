export declare enum ApiStatus {
    SUCCESS = "success",
    ERROR = "error"
}
export declare class ApiResult<T> {
    status: ApiStatus;
    code: number;
    errorCode: string;
    message: string;
    data: T;
    success(data?: T, message?: string): this;
    setMessage(message: string): this;
    error(message: string, code?: number, errorCode?: string): this;
}
