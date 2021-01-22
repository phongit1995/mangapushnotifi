"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./shared/services/config.service");
const swagger_1 = require("./swagger");
const morgan = require("morgan");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_service_1.ConfigServer);
    app.use(morgan('dev'));
    swagger_1.setUpSwagger(app);
    await app.listen(config.port);
    console.log("App Running on Port :" + config.port);
}
bootstrap();
//# sourceMappingURL=main.js.map