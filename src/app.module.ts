import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ShareModule } from './shared/shared.module';
import { RequestCheckMiddleware } from './common/middleware/usermiddleware';
import { NotificationModule } from './modules/notification/notification.module';
import { CronjobModule } from './modules/cronjob/cronjob.module';

@Module({
  imports: [
    ShareModule,
    NotificationModule,
    CronjobModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestCheckMiddleware)
      .forRoutes("*");
  }
}
