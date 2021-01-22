import { NotificationService } from '../notification/notification.service';
import { RequestService } from 'src/shared/services/request.service';
export declare class CronjobService {
    private readonly notificationService;
    private readonly requestService;
    constructor(notificationService: NotificationService, requestService: RequestService);
    private readonly URL_WEBSITE;
    handleJob(): Promise<void>;
}
