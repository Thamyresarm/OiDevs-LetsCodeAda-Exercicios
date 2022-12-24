import { PrismaClient } from "@prisma/client";
import { DeletedPresenter, IPresenter, NotFoundPresenter } from "../../presenters";
import { GetProductUseCase } from "./getProduct";

const prisma = new PrismaClient();

export class DeleteProductUseCase {
  constructor() { }

  async handle(id: string): Promise<IPresenter> {

    const useCaseGet = new GetProductUseCase();
    const productExists = await useCaseGet.handle(id);

    if (!productExists) {
      return new NotFoundPresenter({
        message: 'Product not found!',
      });
    }

    await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return new DeletedPresenter();
  }
}