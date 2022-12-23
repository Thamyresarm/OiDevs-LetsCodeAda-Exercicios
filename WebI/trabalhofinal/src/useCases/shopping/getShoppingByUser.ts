import { PrismaClient, Shopping } from "@prisma/client";

const prisma = new PrismaClient();

export class GetShoppingByUser{
    async handle(idUser: string): Promise<Shopping[] | null>{
        const shopping = await prisma.shopping.findMany({
            where: {
                idUser: {
                    equals: idUser
                }
            },
            include: {
                Items: true
            }
            
        });
        return shopping;
    }
}