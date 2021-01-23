import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { History } from 'src/database/history';
import { FcmPushService } from 'src/shared/services/push.service';
import { ListLastVersion } from '../cronjob/cronjob.interface';

@Injectable()
export class NotificationService {
    constructor(private readonly pushService:FcmPushService,
        @InjectModel('history') private readonly historyModel:Model<History>
        ){}
    async testPushToTopic(topic:string):Promise<any>{
        return this.pushService.sendMessage({
            to:"/topics/"+topic,
            notification:{
                title:"Hello",
                body:"Hello"
            }
        })
    }
    async sendNotificationToTopic(data:ListLastVersion){
        const historyData = await this.historyModel.findOne({
            IndexName:data.IndexName,
            Chapter:data.Chapter
        })
        const chapterString = data.Chapter.toString().slice(1,-1).replace(/0/g,"")
        if(historyData){
            return null
        }
        await this.historyModel.create({
            IndexName:data.IndexName,
            Chapter:data.Chapter
        })
        await this.pushService.sendMessage({
            to:"/topics/"+data.IndexName,
            notification:{
                title:"",
                body:`${data.SeriesName} - chapter ${chapterString}`
            }
        })
        
    }

}
