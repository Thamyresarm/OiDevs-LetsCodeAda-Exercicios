import { PrismaClient, Shopping } from "@prisma/client";

const prisma = new PrismaClient();

export class UpdateStatusShopping{
    constructor(){}

    async handle(id: string): Promise<Shopping>{
        const updatedShopping = await prisma.shopping.update({
            data: {
                status: 'Canceled'
            },
            where: {
                id: id
            }
        });
        return updatedShopping;
    }
}