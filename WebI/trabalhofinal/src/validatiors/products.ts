import { body, param } from 'express-validator';

export const productValidations = [
  body('name').notEmpty().withMessage('Name is required!'),
  body('description')
    .notEmpty()
    .withMessage('Description is required'),
  body('price')
  .isInt({
    min: 0,
    })
  .withMessage('Price is required!'),
  body('quantity')
  .isInt({
    min: 0,
    })
  .withMessage('Quantity is required!'),
];

export const productIdValidation = [
  param('id').notEmpty().withMessage('Id is required!'),
];

export const editProductValidations = [...productIdValidation, ...productValidations];