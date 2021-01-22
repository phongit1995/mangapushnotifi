export declare class ConfigServer {
    private readonly envConfig;
    private readonly validationScheme;
    constructor();
    get(key: string): string;
    get port(): number;
    get jwtSecret(): string;
    get mongo_url(): string;
    get push_key(): string;
    private validateInput;
}
