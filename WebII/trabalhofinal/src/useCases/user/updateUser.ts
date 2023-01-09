import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../domain/entity/user";
import { IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";
import { GetUserUseCase } from "./getUser";

const prisma = new PrismaClient();

export class UpdateUserUseCase {
    constructor(){}

    async handle({id, name, email, password}: UserEntity): Promise<IPresenter>{

      const useCaseGet = new GetUserUseCase();
      const user = await useCaseGet.handle(id);

      if (!user) {
        return new NotFoundPresenter({
          message: 'User not found!',
        });
      }

        const updatedUser = await prisma.user.update({
            data: {
              name,
              email,
              password
            },
            where: {
              id,
            },
          });
          return new SuccessPresenter(updatedUser);
    }        
}