import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as swStats from 'swagger-stats';
export function setUpSwagger(app:INestApplication):void{
    const options = new DocumentBuilder()
    .setTitle('TIK FANS API')
    .setVersion('1.0')
    .addTag('TIK FANS')
    .setDescription("TIK FANS ME")
    .setContact("Phong Dinh Nguyen","https://www.facebook.com/phongdinhnguyen123/","phong123@gmail.com")
    .build();
    app.use(swStats.getMiddleware({
        name: 'TIK FANS ME ',
        uriPath:"/swagger",
        authentication:true,
        onAuthenticate:(req,username:string,password:string)=>{
            return ((username=='admin'))&&((password=='admin'))
        }
    }))
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
}