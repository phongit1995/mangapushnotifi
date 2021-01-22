import { Catch ,ArgumentsHost ,ExceptionFilter,} from "@nestjs/common";
import {Request,Response} from 'express';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter  {
    catch(exception:any,host:ArgumentsHost){
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        try{
            const status = exception.getStatus();
            const message = exception.message ;
            if(exception.response){
                response.status(status).json({
                    code:status,
                    timestamp:new Date().toISOString(),
                    path:request.url,
                    message:(typeof exception.response=="string"||typeof exception.response.message=="string"?
                    typeof exception.response=="string"?exception.response:exception.response.message :"Validation Fail :" + exception.response.message.join(","))
                })
            }else {
                response.status(status).json({
                    code:status,
                    timestamp:new Date().toISOString(),
                    path:request.url,
                    message:message 
                })
            }
        }catch{
            response.status(400).json({
                code:400,
                timestamp:new Date().toISOString(),
                path:request.url,
                message:exception.stack
            })
        }
    }
}