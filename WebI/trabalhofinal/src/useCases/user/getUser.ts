import { PrismaClient } from "@prisma/client";
import { toUserResponse } from "../../maps/user";
import { IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";

const prisma = new PrismaClient();

export class GetUserUseCase {
  constructor() { }

  async handle(id: string): Promise<IPresenter> {
    const user = await prisma.user.findFirst({
      where: {
        id: {
          equals: id
        }
      }
    });

    if (!user) {
      return new NotFoundPresenter({
        message: 'User not found!',
      });
    }
    const result = toUserResponse(user);
    return new SuccessPresenter(result);
  }
}