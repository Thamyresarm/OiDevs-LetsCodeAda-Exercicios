import { Product } from '@prisma/client';
import { ProductResponse } from '../domain/responses/product';

export function toProductResponse(product: Product): ProductResponse {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
  };
}