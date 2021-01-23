import { Injectable } from '@nestjs/common';
import { Cron ,Timeout ,CronExpression} from '@nestjs/schedule';
import { NotificationService } from '../notification/notification.service';
import * as cheerio from 'cheerio';
import { RequestService } from 'src/shared/services/request.service';
import { ListLastVersion } from './cronjob.interface';
@Injectable()
export class CronjobService {
    constructor(
        private readonly notificationService:NotificationService,
        private readonly requestService:RequestService
    ){}
    private readonly URL_WEBSITE:string = "https://mangasee123.com/";
    @Cron(CronExpression.EVERY_2_HOURS)
    async handleJob(){
        console.log("Phong");
        const resutlFetch = await this.requestService.getMethod(this.URL_WEBSITE);
        let regexData = new RegExp(/(?=LatestJSON).*(?=;)/g);
        const resultRegex = regexData.exec(resutlFetch);
        let dataKey = resultRegex[0].replace("LatestJSON =","");
        let listLastedVersion:Array<ListLastVersion> = JSON.parse(dataKey);
        listLastedVersion = listLastedVersion.filter((item,index)=>index<10);
        listLastedVersion.map((item)=>{
            this.notificationService.sendNotificationToTopic(item)
        })
        
    }
}
