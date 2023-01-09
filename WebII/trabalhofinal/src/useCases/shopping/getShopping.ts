import { PrismaClient } from "@prisma/client";
import { toShoppingResponse } from "../../maps/shopping";
import { IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";

const prisma = new PrismaClient();

export class GetShoppingById{
    constructor(){}

    async handle(id: string): Promise<IPresenter>{
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

        
    if (!shopping) {
        return new NotFoundPresenter({
            message: 'Shopping not found!',
        });
    }
    const result = toShoppingResponse(shopping);
    return new SuccessPresenter(result);
    }
}