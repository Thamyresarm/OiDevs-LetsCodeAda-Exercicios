import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export class GetProductUseCase {
  constructor() {}

async handle(id: string): Promise<Product | null>{
    const product = await prisma.product.findFirst({
      where: {
        id: {
          equals: id
        }
      },
    });
    
    return product;
}
 
}