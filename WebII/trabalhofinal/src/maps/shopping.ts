import {  Shopping } from '@prisma/client';
import { ShoppingDataResponse } from '../domain/responses/shopping';

export function toShoppingResponse(shopping: Shopping): ShoppingDataResponse {
  return {
    id: shopping.id,
    payment: shopping.payment,
    status: shopping.status,
    totalValue: shopping.totalValue,
    idUser: shopping.idUser
  };
}