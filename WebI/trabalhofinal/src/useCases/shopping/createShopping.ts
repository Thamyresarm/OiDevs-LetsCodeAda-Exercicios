import { PrismaClient, Shopping } from "@prisma/client";
import { v4 } from "uuid";

const prisma = new PrismaClient();

interface IShopping{
    payment: string,
    totalValue: number,
    idUser: string
}

export class CreateShoppingUseCase{
    constructor(){}

    async handle(shopping: IShopping): Promise<Shopping> {
        
        const createdShopping = await prisma.shopping.create({
            data: {
                id: v4(),
                payment: shopping.payment,
                status: 'Concluído',
                totalValue: shopping.totalValue,
                idUser: shopping.idUser
            },
            include: {
                user: true
            }
        });
        return createdShopping;
    }
}