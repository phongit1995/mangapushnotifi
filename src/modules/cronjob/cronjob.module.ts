import { Module } from '@nestjs/common';
import { CronjobService } from './cronjob.service';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationModule } from '../notification/notification.module';
@Module({
  imports:[
    ScheduleModule.forRoot(),
    NotificationModule
  ],
  providers: [CronjobService]
})
export class CronjobModule {}
