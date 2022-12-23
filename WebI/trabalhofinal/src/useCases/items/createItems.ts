import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import { ItemsDto } from "../../domain/dto/items";

const prisma = new PrismaClient();

export class CreateItemsUseCase {
    constructor() { }

    handle(items: ItemsDto[], idShopping: string) {
        items.forEach(async item => {
            await prisma.items.create({
                data: {
                    id: v4(),
                    quantity: item.quantity,
                    unitValue: item.unitValue,
                    idProduct: item.idProduct,
                    idShopping: idShopping
                }
            });
        });
    }
}