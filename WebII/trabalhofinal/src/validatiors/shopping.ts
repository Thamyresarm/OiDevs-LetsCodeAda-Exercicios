import { body, param } from 'express-validator';

export const shoppingValidations = [
  body('idUser').notEmpty().withMessage('IdUser is required!'),
  body('payment')
    .notEmpty()
    .withMessage('Payment is required'),
  body('items').notEmpty().withMessage('Items is required!')
];

export const shoppingIdValidation = [
  param('id').notEmpty().withMessage('Id shopping is required!'),
];
