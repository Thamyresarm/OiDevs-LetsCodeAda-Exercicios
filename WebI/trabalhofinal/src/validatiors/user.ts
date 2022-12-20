import { body, param } from 'express-validator';

export const userValidations = [
  body('name').notEmpty().withMessage('Name is required!'),
  body('email')
    .notEmpty()
    .withMessage('E-mail is required')
    .isEmail()
    .withMessage('E-mail is invalid!'),
  body('password').notEmpty().withMessage('Password is required!')
];

export const userIdValidation = [
  param('id').notEmpty().withMessage('Id is required!'),
];

export const editUserValidations = [...userIdValidation, ...userValidations];