import { Injectable } from '@nestjs/common';
import { Cron ,Timeout ,CronExpression} from '@nestjs/schedule';
import { NotificationService } from '../notification/notification.service';
import * as cheerio from 'cheerio';
import { RequestService } from 'src/shared/services/request.service';
@Injectable()
export class CronjobService {
    constructor(
        private readonly notificationService:NotificationService,
        private readonly requestService:RequestService
    ){}
    private readonly URL_WEBSITE:string = "https://mangasee123.com/";
    // @Timeout(1000)
    async handleJob(){
        console.log("Phong");
        const resutlFetch = await this.requestService.getMethod(this.URL_WEBSITE);
        const $ = cheerio.load(resutlFetch);
        console.log($(".BoxBody.LatestChapters>.row .Chapter").length)
        //console.log(resutlFetch);
    }
}
