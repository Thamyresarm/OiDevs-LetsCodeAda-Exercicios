import { PrismaClient } from "@prisma/client";
import { IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";
import { GetShoppingById } from "./getShopping";

const prisma = new PrismaClient();

export class UpdateStatusShopping{
    constructor(){}

    async handle(id: string): Promise<IPresenter>{

    const useCaseGet = new GetShoppingById();
    const shopping = await useCaseGet.handle(id);

    if (!shopping) {
        return new NotFoundPresenter({
            message: 'Shopping not found!',
        });
    }

        const updatedShopping = await prisma.shopping.update({
            data: {
                status: 'Canceled'
            },
            where: {
                id: id
            }
        });
        return new SuccessPresenter(updatedShopping);
    }
}