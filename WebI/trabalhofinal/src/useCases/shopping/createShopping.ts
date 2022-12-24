import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import { ItemsDto } from "../../domain/dto/items";
import { ShoppingDto } from "../../domain/dto/shopping";
import { ProductEntity } from "../../domain/entity/product";
import { BadRequestPresenter, IPresenter, NotFoundPresenter, SuccessPresenter } from "../../presenters";
import { CreateItemsUseCase } from "../items/createItems";
import { UpdateProductUseCase } from "../product/updateProduct";

const prisma = new PrismaClient();

export class CreateShoppingUseCase{
    constructor(){}

    async handle(shoppingDto: ShoppingDto): Promise<IPresenter> {

        let items: ItemsDto[] = [];
    
        for (let i = 0; i < shoppingDto.items.length; i++) {
    
            const product = await prisma.product.findFirst({
                where: {
                    id: {
                        equals: shoppingDto.items[i].id
                    }
                }
            });
    
            if (!product) {
                return new NotFoundPresenter({
                    message: 'Problems to find product ' + shoppingDto.items[i].id
                })
            } else {
                if(product.quantity < shoppingDto.items[i].quantity){
                    return new BadRequestPresenter({
                        message: 'Insufficient stock. Max: ' + product.quantity
                    })
                }
            }
    
            console.log('consultando valores.....');
            
            items.push({
                idProduct: shoppingDto.items[i].id,
                quantity: shoppingDto.items[i].quantity,
                unitValue: product.price
            });
            
            console.log('atualizando estoque.....');
    
            const updateStock = new UpdateProductUseCase();
    
            const productUpdated: ProductEntity = {     
                id: product.id,       
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: (product.quantity - shoppingDto.items[i].quantity)
            }
    
            await updateStock.handle({...productUpdated});
        }
    
        const totalValue = items.reduce((acc, cur) => acc + (cur.quantity * cur.unitValue), 0);
    
        const user = await prisma.user.findFirst({
            where: {
                id: {
                    equals: shoppingDto.idUser
                }
            }
        });
    
        if (!user) {
            return new NotFoundPresenter({
                message: 'User not found!',
            });
        }
    
        const shopping = {
            payment: shoppingDto.payment,
            totalValue: totalValue,
            idUser: user.id
        }
        
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

        const userCaseItems = new CreateItemsUseCase();
        userCaseItems.handle(items, createdShopping.id)

        return new SuccessPresenter(createdShopping);
    }
}