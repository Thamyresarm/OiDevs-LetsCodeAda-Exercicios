import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import { ProductEntity } from "../../domain/entity/product";
import { toProductResponse } from "../../maps/product";
import { IPresenter, SuccessPresenter } from "../../presenters";

const prisma = new PrismaClient(); 

export class CreateProductUseCase{
    constructor(){}

    async handle(product: Omit<ProductEntity, 'id'>): Promise<IPresenter>{
        
        const createdProduct = await prisma.product.create({
            data: {
              id: v4(),
              name: product.name,
              description: product.description,
              price: product.price,
              quantity: product.quantity
            }
        });
        const result = toProductResponse(createdProduct);
        return new SuccessPresenter(result);
    }
}