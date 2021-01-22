"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const swStats = require("swagger-stats");
function setUpSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('TIK FANS API')
        .setVersion('1.0')
        .addTag('TIK FANS')
        .setDescription("TIK FANS ME")
        .setContact("Phong Dinh Nguyen", "https://www.facebook.com/phongdinhnguyen123/", "phong123@gmail.com")
        .build();
    app.use(swStats.getMiddleware({
        name: 'TIK FANS ME ',
        uriPath: "/swagger",
        authentication: true,
        onAuthenticate: (req, username, password) => {
            return ((username == 'admin')) && ((password == 'admin'));
        }
    }));
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
}
exports.setUpSwagger = setUpSwagger;
//# sourceMappingURL=swagger.js.map