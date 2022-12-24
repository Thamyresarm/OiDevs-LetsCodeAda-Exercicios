import { PrismaClient } from "@prisma/client";
import { toProductResponse } from "../../maps/product";
import { IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";

const prisma = new PrismaClient();

export class GetProductUseCase {
  constructor() {}

async handle(id: string): Promise<IPresenter>{
    const product = await prisma.product.findFirst({
      where: {
        id: {
          equals: id
        }
      },
    });

    if (!product) {
      return new NotFoundPresenter({
          message: 'Product not found!',
      });
  }
  const result = toProductResponse(product);
  return new SuccessPresenter(result);
}
 
}