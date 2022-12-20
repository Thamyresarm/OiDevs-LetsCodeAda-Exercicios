import { PrismaClient, Product } from "@prisma/client";
import { v4 } from "uuid";
import { ProductEntity } from "../../domain/entity/product";

const prisma = new PrismaClient(); 

export class CreateProductUseCase{
    constructor(){}

    async handle(product: Omit<ProductEntity, 'id'>): Promise<Product>{
        
        const createdProduct = await prisma.product.create({
            data: {
              id: v4(),
              name: product.name,
              description: product.description,
              price: product.price,
              quantity: product.quantity
            }
        });

        return createdProduct;
    }
}