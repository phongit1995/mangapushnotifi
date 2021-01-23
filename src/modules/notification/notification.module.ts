import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { historySchema } from 'src/database/history';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:"history",schema:historySchema}
    ])
  ],
  providers: [NotificationService],
  controllers: [NotificationController],
  exports:[NotificationService]
})
export class NotificationModule {}
