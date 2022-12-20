import { PrismaClient, Product } from "@prisma/client";
import { ProductEntity } from "../../domain/entity/product";


const prisma = new PrismaClient();

export class UpdateProductUseCase {
    constructor(){}

    async handle({id, name, description, price, quantity}: ProductEntity): Promise<Product>{
        
        const updatedProduct = await prisma.product.update({
            data: {
              name,
              description,
              price,
              quantity
            },
            where: {
              id,
            },
          });
          
          return updatedProduct;
    }        
}