import { Injectable } from '@nestjs/common';
import * as fcmPush from 'fcm-push';
import { ConfigServer } from './config.service';
@Injectable()
export class FcmPushService{
    private fcm:any ;
    constructor(private configServer:ConfigServer){
        this.fcm = new fcmPush(configServer.push_key);
    }
    async sendMessage(message:pushMessage):Promise<void>{
        return this.fcm.send(message,function(err, response){
            if (err) {
                console.log(err);
                console.log("Push Notification False");
            } else {
                console.log(response);
            }
        });
    }
}
export interface pushMessage{
    to?:string,
    registration_ids?:string[],
    topic?:string,
    collapse_key?:string,
    notification?:{title?:string,body?:string,image?:string},
    image?:string
    data?:{[index:string]:string},
    priority?:string,
}
