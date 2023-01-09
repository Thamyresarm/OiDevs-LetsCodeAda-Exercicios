import { PrismaClient } from '@prisma/client';
import { toProductResponse } from '../../maps/product';
import { IPresenter, SuccessPresenter } from '../../presenters';

const prisma = new PrismaClient();

export class ListProductsUseCase {
  constructor() {}

  async handle(): Promise<IPresenter> {
    const products = await prisma.product.findMany();
    
    const productsResponse = products.map((product) => toProductResponse(product));

    return new SuccessPresenter(productsResponse);
  }
}

