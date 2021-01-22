import { FcmPushService } from 'src/shared/services/push.service';
export declare class NotificationService {
    private readonly pushService;
    constructor(pushService: FcmPushService);
    testPushToTopic(topic: string): Promise<any>;
}
