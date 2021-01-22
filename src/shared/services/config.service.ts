import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
export class ConfigServer {
    private readonly envConfig:dotenv.DotenvParseOutput;
    private readonly validationScheme = {
        PORT: Joi.number().default(3000),
        MONGO_URL:Joi.string(),
        JWT_SECRET:Joi.string(),
        FCM_KEY_PUSH:Joi.string()
    }
    constructor(){
        let config = dotenv.config();
        if(config.error){
            throw new Error('No .env found');
        }
        this.envConfig = this.validateInput(config.parsed);
    }
    public get(key:string):string{
        return process.env[key];
    }
    get port ():number{
        return Number(this.envConfig.PORT)
    }
    get  jwtSecret ():string {
        return this.envConfig.JWT_SECRET ;
    }
    get mongo_url():string{
        return this.envConfig.MONGO_URL
    }
    get push_key():string {
        return this.envConfig.FCM_KEY_PUSH
    }
    private validateInput(
        envConfig: dotenv.DotenvParseOutput,
      ): dotenv.DotenvParseOutput {
        const envVarsSchema: Joi.ObjectSchema = Joi.object(this.validationScheme);
    
        const result = envVarsSchema.validate(envConfig);
        if (result.error) {
          throw new Error(`Config validation error: ${result.error.message}`);
        }
        return result.value;
      }
}