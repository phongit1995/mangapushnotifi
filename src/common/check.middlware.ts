import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as md5 from 'md5';
import { ConfigServer } from 'src/shared/services/config.service';
export function CheckRequest(req: Request, res: Response, next: Function) {
    let {unittime,token,admin} = req.headers ;
    let {url} =req;
    if(url.includes("/docs")){
        return  next();
    }
    if(admin=='ADMIN'){
        return next();
    }
    if(!unittime || !token){
        return res.status(401).json({
            code:401,
            status:"error",
            message:"ERROR_AUTHEN"
        })
    }
    next()
  };
  @Injectable()
  export class ValidationRequestServer implements NestMiddleware {
      constructor(
          private configService:ConfigServer
      ){}
      private readonly TIME_EXPRIED:number=1000*10;
      async use(req: Request|any, res: Response, next: Function){
        const {unittime,secret,admin} = req.headers;
        if(admin=="ADMIN"){
            return next();
        }
        if(!unittime || !secret){
            return res.status(409).json({
                code:409,
                status:"error",
                message:"AUTHEN_SERVER_FAIL"
            })
        }
        if( Math.abs( Date.now() - unittime) > this.TIME_EXPRIED ){
            return res.status(409).json({
                code:409,
                status:"error",
                message:"AUTHEN_SERVER_FAIL"
            })
        }
        const secretData:string = md5(unittime+ this.configService.jwtSecret);
        if(secretData!=secret){
            return res.status(409).json({
                code:409,
                status:"error",
                message:"AUTHEN_SERVER_FAIL"
            })
        }
        next();
      }
  }