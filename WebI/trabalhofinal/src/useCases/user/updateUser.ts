import { PrismaClient, User } from "@prisma/client";
import { UserEntity } from "../../domain/entity/user";


const prisma = new PrismaClient();

export class UpdateUserUseCase {
    constructor(){}

    async handle({id, name, email, password}: UserEntity): Promise<User>{
        
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
          return updatedUser;
    }        
}