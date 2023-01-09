import { Request, Response } from 'express';
import { ShoppingDto } from "../domain/dto/shopping";
import { processResult } from '../presenters';
import { CreateShoppingUseCase } from '../useCases/shopping/createShopping';
import { GetShoppingById } from '../useCases/shopping/getShopping';
import { GetShoppingByUser } from '../useCases/shopping/getShoppingByUser';
import { UpdateStatusShopping } from '../useCases/shopping/updateStatusShopping';

export async function createShopping(request: Request<{}, {}, ShoppingDto>, response: Response) {

    const shoppingDto = request.body;    

    const useCase = new CreateShoppingUseCase();
    const result = await useCase.handle(shoppingDto);

    return processResult(response, result);
}

export async function getShoppingById(request: Request<{ id: string }>, response: Response) {

    const { id } = request.params

    const useCase = new GetShoppingById();
    const result = await useCase.handle(id);

    return processResult(response, result);
}

export async function getShoppingByUser(request: Request<{ idUser: string }>, response: Response) {

    const { idUser } = request.params

    const useCase = new GetShoppingByUser();
    const result = await useCase.handle(idUser);

    return processResult(response, result);
}

export async function updateStatusShopping(request: Request<{ id: string }>, response: Response) {

    const { id } = request.params
    const useCase = new UpdateStatusShopping();
    const result = await useCase.handle(id);

    return processResult(response, result);
}