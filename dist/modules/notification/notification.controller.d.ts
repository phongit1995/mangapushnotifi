import { ApiResult } from 'src/common/api-result';
import { dtoTestNotification } from './notification.dto';
import { NotificationService } from './notification.service';
export declare class NotificationController {
    private notificationService;
    constructor(notificationService: NotificationService);
    testNotification(data: dtoTestNotification): Promise<ApiResult<unknown>>;
}
