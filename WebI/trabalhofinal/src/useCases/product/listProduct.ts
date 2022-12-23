import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export class ListProductsUseCase {
  constructor() {}

  async handle(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products;
  }
}

