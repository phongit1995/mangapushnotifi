import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigServer } from 'src/shared/services/config.service';
export declare function CheckRequest(req: Request, res: Response, next: Function): any;
export declare class ValidationRequestServer implements NestMiddleware {
    private configService;
    constructor(configService: ConfigServer);
    private readonly TIME_EXPRIED;
    use(req: Request | any, res: Response, next: Function): Promise<any>;
}
