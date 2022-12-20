import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 

export class DeleteUserCase{
    constructor(){}

    async handle(id: string){
        
        await prisma.user.delete({
            where: {
              id: id,
            },
          });
    }
}