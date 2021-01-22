import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigServer } from './shared/services/config.service';
import { setUpSwagger } from './swagger';
import * as morgan from 'morgan';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigServer);
  app.use(morgan('dev'));
  setUpSwagger(app);
  await app.listen(config.port);
  console.log("App Running on Port :" + config.port)
}
bootstrap();
