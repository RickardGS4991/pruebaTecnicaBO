import joi from 'joi';

export const contactValidator = joi.object().keys({
    email: joi.string().email().required(),
    firstname: joi.string().min(5).required(),
    lastname: joi.string().min(5).required(),
});

export const updateContactValidator = joi.objetct().keys({
    firstname: joi.string().min(5),
    lastname: joi.string().min(5),
    phone: joi.string().min(10).regex(/^\d+$/)
});