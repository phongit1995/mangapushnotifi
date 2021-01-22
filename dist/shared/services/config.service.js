"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
const dotenv = require("dotenv");
const Joi = require("@hapi/joi");
class ConfigServer {
    constructor() {
        this.validationScheme = {
            PORT: Joi.number().default(3000),
            MONGO_URL: Joi.string(),
            JWT_SECRET: Joi.string(),
            FCM_KEY_PUSH: Joi.string()
        };
        let config = dotenv.config();
        if (config.error) {
            throw new Error('No .env found');
        }
        this.envConfig = this.validateInput(config.parsed);
    }
    get(key) {
        return process.env[key];
    }
    get port() {
        return Number(this.envConfig.PORT);
    }
    get jwtSecret() {
        return this.envConfig.JWT_SECRET;
    }
    get mongo_url() {
        return this.envConfig.MONGO_URL;
    }
    get push_key() {
        return this.envConfig.FCM_KEY_PUSH;
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object(this.validationScheme);
        const result = envVarsSchema.validate(envConfig);
        if (result.error) {
            throw new Error(`Config validation error: ${result.error.message}`);
        }
        return result.value;
    }
}
exports.ConfigServer = ConfigServer;
//# sourceMappingURL=config.service.js.map