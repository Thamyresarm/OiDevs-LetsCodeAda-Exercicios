import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 

export class DeleteProductUseCase{
    constructor(){}

    async handle(id: string){
        
        await prisma.product.delete({
            where: {
              id: id,
            },
          });
    }
}