import { Body, Controller, Post } from '@nestjs/common';
import { ApiConsumes, ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/common/api-result';
import { dtoTestNotification } from './notification.dto';
import { NotificationService } from './notification.service';
@ApiTags("Notification")
@ApiConsumes("Notification Api")
@ApiHeader({
    name:"token",
    description: 'token User',
})

@Controller('notification')
export class NotificationController {
    constructor(private notificationService:NotificationService){}
    @Post('test-notification-topic')
    @ApiOperation({summary:"Create New Comment"})
    @ApiResponse({ status: 201, description: 'Create New Comment Success Fully.'})
    async testNotification(@Body()data:dtoTestNotification){
        const result = await this.notificationService.testPushToTopic(data.topic);
        return new ApiResult().success(JSON.parse(result));
    }

}
