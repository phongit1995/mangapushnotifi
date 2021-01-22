import { Injectable } from '@nestjs/common';
import { FcmPushService } from 'src/shared/services/push.service';

@Injectable()
export class NotificationService {
    constructor(private readonly pushService:FcmPushService){}
    async testPushToTopic(topic:string):Promise<any>{
        return this.pushService.sendMessage({
            topic:topic,
            notification:{
                title:"Hello",
                body:"Hello"
            }
        })
    }

}
