import * as Joi from 'joi';

export const validationSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'staging', 'production')
        .default('development'),
    PORT: Joi.number().default(3000),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRATION: Joi.string().required(),
})
