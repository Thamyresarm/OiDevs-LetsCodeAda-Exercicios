import { PrismaClient } from "@prisma/client";
import { ProductEntity } from "../../domain/entity/product";
import { IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";
import { GetProductUseCase } from "./getProduct";

const prisma = new PrismaClient();

export class UpdateProductUseCase {
  constructor() { }

  async handle({ id, name, description, price, quantity }: ProductEntity): Promise<IPresenter> {

    const useCaseGet = new GetProductUseCase();
    const product = await useCaseGet.handle(id);

    if (!product) {
      return new NotFoundPresenter({
        message: 'Product not found!',
      });
    }

    const updatedProduct = await prisma.product.update({
      data: {
        name,
        description,
        price,
        quantity
      },
      where: {
        id,
      },
    });

    return new SuccessPresenter(updatedProduct);
  }
}