import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { ConfigServer } from 'src/shared/services/config.service';
//import * as md5 from 'md5';
const TIME_EXPRIED=1000*60*2 ;
@Injectable()
export class RequestCheckMiddleware implements NestMiddleware {

    constructor(private jwtService: JwtService){}
    async use(req: Request|any, res: Response, next: Function){
        const token =  req.headers?.token ;
        if(token){
            try {
                let user= this.jwtService.decode(token);
                req.user=user ;
            } catch (error) {
                console.log('loi' +error);
            }
        }  
        next();
    }
}
// @Injectable()
// export class CheckAuthenticationApi implements NestMiddleware {
//     constructor(private readonly configService:ConfigServer){}
//     async use(req: Request|any, res: Response, next: Function){
//         const admin:string = req.headers?.admin ;
//         if(admin?.toLowerCase() =="admin"){
//             return next()
//         }
//         const unittime:number = req.headers?.unittime ;
//         const secret:string  = req.headers?.secret  ;
//         if(unittime==undefined ||secret==undefined ){
//             return res.status(401).json({status:401,message:"AUTHOR_FAIL"})
//         }
//         if(Math.abs(Date.now()-unittime)>TIME_EXPRIED){
//             return res.status(401).json({status:401,message:"AUTHOR_FAIL"})
//         }
        
//         const secret_key:string = md5(unittime+ this.configService.secretKey)
//         if(secret_key!=secret){
//             return res.status(401).json({status:401,message:"AUTHOR_FAIL"})
//         }
//         next();
        
//     }
// }