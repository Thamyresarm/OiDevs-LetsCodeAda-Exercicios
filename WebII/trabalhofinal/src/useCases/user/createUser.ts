import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import { UserEntity } from "../../domain/entity/user";
import { toUserResponse } from "../../maps/user";
import { IPresenter, SuccessPresenter } from "../../presenters";

const prisma = new PrismaClient(); 

export class CreateUserUseCase{
    constructor(){}

    async handle(user: Omit<UserEntity, 'id'>): Promise<IPresenter>{
        
        const createdUser = await prisma.user.create({
            data: {
              id: v4(),
              name: user.name,
              email: user.email,
              password: user.password
            }
        });

        const result = toUserResponse(createdUser)
        return new SuccessPresenter(result);
    }
}