import Joi from "joi";


export const paginationSchema = Joi.object({
    page_size: Joi.number().required(),
    page: Joi.number().required(),
    sort_column: Joi.string().required(),
    sort_direction: Joi.number().valid(1, -1).messages({ 'any.only': 'invalid sort direction' }),
});

 

export const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

  

