import { PrismaClient, User } from "@prisma/client";
import { v4 } from "uuid";
import { UserEntity } from "../../domain/entity/user";

const prisma = new PrismaClient(); 

export class CreateUserUseCase{
    constructor(){}

    async handle(user: Omit<UserEntity, 'id'>): Promise<User>{
        
        const createdUser = await prisma.user.create({
            data: {
              id: v4(),
              name: user.name,
              email: user.email,
              password: user.password
            }
        });

        return createdUser;
    }
}