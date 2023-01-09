import { PrismaClient } from "@prisma/client";
import { toShoppingResponse } from "../../maps/shopping";
import { IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";

const prisma = new PrismaClient();

export class GetShoppingByUser{
    constructor(){};

    async handle(idUser: string): Promise<IPresenter>{
        const shoppings = await prisma.shopping.findMany({
            where: {
                idUser: {
                    equals: idUser
                }
            }            
        });

        if (!shoppings) {
            return new NotFoundPresenter({
                message: 'Shopping not found!',
            });
        }
        const result = shoppings.map((shopping) => toShoppingResponse(shopping));
        return new SuccessPresenter(result);
    }
}