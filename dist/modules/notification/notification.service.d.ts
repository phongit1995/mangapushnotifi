import { Model } from 'mongoose';
import { History } from 'src/database/history';
import { FcmPushService } from 'src/shared/services/push.service';
import { ListLastVersion } from '../cronjob/cronjob.interface';
export declare class NotificationService {
    private readonly pushService;
    private readonly historyModel;
    constructor(pushService: FcmPushService, historyModel: Model<History>);
    testPushToTopic(topic: string): Promise<any>;
    sendNotificationToTopic(data: ListLastVersion): Promise<any>;
}
