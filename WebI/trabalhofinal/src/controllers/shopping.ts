import { Request, Response } from 'express';
import { ItemsDto } from '../domain/dto/items';
import { ShoppingDto } from "../domain/dto/shopping";
import { ProductEntity } from '../domain/entity/product';
import { CreateItemsUseCase } from '../useCases/items/createItems';
import { GetProductUseCase } from '../useCases/product/getProduct';
import { UpdateProductUseCase } from '../useCases/product/updateProduct';
import { CreateShoppingUseCase } from '../useCases/shopping/createShopping';
import { GetShoppingById } from '../useCases/shopping/getShopping';
import { GetShoppingByUser } from '../useCases/shopping/getShoppingByUser';
import { UpdateStatusShopping } from '../useCases/shopping/updateStatusShopping';
import { GetUserUseCase } from '../useCases/user/getUser';


export async function createShopping(request: Request<{}, {}, ShoppingDto>, response: Response) {

    let items: ItemsDto[] = [];

    const shoppingRequest = request.body;

    const searchProduct = new GetProductUseCase();

    for (let i = 0; i < shoppingRequest.items.length; i++) {

        const product = await searchProduct.handle(shoppingRequest.items[i].id);

        if (!product) {
            return response.status(404).json({
                message: 'Problems to find product ' + shoppingRequest.items[i].id
            })
        } else {
            if(product.quantity < shoppingRequest.items[i].quantity){
                return response.status(404).json({
                    message: 'Insufficient stock. Max: ' + product.quantity
                })
            }
        }

        console.log('consultando valores.....');
        items.push({
            idProduct: shoppingRequest.items[i].id,
            quantity: shoppingRequest.items[i].quantity,
            unitValue: product.price
        });
        
        console.log('atualizando estoque.....');

        const updateStock = new UpdateProductUseCase();

        const productUpdated: Omit<ProductEntity, 'id'> = {            
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: (product.quantity - shoppingRequest.items[i].quantity)
        }

        await updateStock.handle({shoppingRequest.items[i].id, ...productUpdated});
    }

    const totalValue = items.reduce((acc, cur) => acc + (cur.quantity * cur.unitValue), 0);

    const searchUser = new GetUserUseCase();
    const user = await searchUser.handle(shoppingRequest.idUser);

    if (!user) {
        return response.status(404).json({
            message: 'User not found!',
        });
    }

    const shopping = {
        payment: shoppingRequest.payment,
        totalValue: totalValue,
        idUser: user.id
    }

    const useCase = new CreateShoppingUseCase();
    const createdShopping = await useCase.handle(shopping);

    const userCaseItems = new CreateItemsUseCase();
    userCaseItems.handle(items, createdShopping.id)

    return response.json(createdShopping);
}

export async function getShoppingById(request: Request<{ id: string }>, response: Response) {

    const { id } = request.params

    const useCase = new GetShoppingById();
    const shopping = await useCase.handle(id);

    if (!shopping) {
        return response.status(404).json({
            message: 'Shopping not found!',
        });
    }

    return response.send(shopping)
}

export async function getShoppingByUser(request: Request<{ idUser: string }>, response: Response) {

    const { idUser } = request.params

    const useCase = new GetShoppingByUser();
    const shopping = await useCase.handle(idUser);

    if (!shopping) {
        return response.status(404).json({
            message: 'Shopping not found!',
        });
    }
    return response.send(shopping)
}

export async function updateStatusShopping(request: Request<{ id: string }>, response: Response) {

    const { id } = request.params

    const useCaseGet = new GetShoppingById();
    const shopping = await useCaseGet.handle(id);

    if (!shopping) {
        return response.status(404).json({
            message: 'Shopping not found!',
        });
    }

    const useCase = new UpdateStatusShopping();
    const updatedShopping = await useCase.handle(id);

    return response.json(updatedShopping);
}