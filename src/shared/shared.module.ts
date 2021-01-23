import { Global, Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "src/common/exceptions.filter";
import { ConfigServer } from "./services/config.service";
import {CacheService} from './services/cache/cache.service';
import { RequestService } from "./services/request.service";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { FcmPushService } from "./services/push.service";
const providers:Array<any> = [ConfigServer,CacheService,RequestService,FcmPushService] 
@Global()
@Module({
    providers:[
        ...providers,
        {
            provide:APP_FILTER,
            useClass:AllExceptionsFilter
        }
    ],
    imports:[
        MongooseModule.forRootAsync({
            imports:[ShareModule],
            useFactory:(config:ConfigServer)=>({
                uri:config.mongo_url,
                retryAttempts:1,
                useFindAndModify:false,
                useCreateIndex:true
            }),
            inject:[ConfigServer]
        }),
        JwtModule.registerAsync({
            imports:[ShareModule],
            useFactory:async (config:ConfigServer)=>({
                secret:config.jwtSecret
            }),
            inject:[ConfigServer]
        }),
    ],
    exports:[...providers,JwtModule]
})
export class ShareModule{}