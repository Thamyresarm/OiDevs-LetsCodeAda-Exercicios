import { PrismaClient, } from "@prisma/client";
import { DeletedPresenter, IPresenter, NotFoundPresenter } from "../../presenters";
import { GetUserUseCase } from "./getUser";

const prisma = new PrismaClient();

export class DeleteUserUseCase {
  constructor() { }

  async handle(id: string): Promise<IPresenter> {


    const useCaseGet = new GetUserUseCase();
    const userExists = await useCaseGet.handle(id);

    if (!userExists) {
      return new NotFoundPresenter({
        message: 'User not found!',
      });
    }
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return new DeletedPresenter();
  }
}