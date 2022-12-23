import { PrismaClient, Shopping } from "@prisma/client";

const prisma = new PrismaClient();

export class GetShoppingById{
    async handle(id: string): Promise<Shopping | null>{
        const shopping = await prisma.shopping.findFirst({
            where: {
                id: {
                    equals: id
                }
            },
            include: {
                user: true,
                Items: true
            }
            
        });
        return shopping;
    }
}