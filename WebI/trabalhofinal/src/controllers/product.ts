import { Request, Response } from "express";
import { ProductEntity } from "../domain/entity/product";
import { processResult } from "../presenters";
import { CreateProductUseCase } from "../useCases/product/createProduct";
import { DeleteProductUseCase } from "../useCases/product/deleteProduct";
import { GetProductUseCase } from "../useCases/product/getProduct";
import { ListProductsUseCase } from "../useCases/product/listProduct";
import { UpdateProductUseCase } from "../useCases/product/updateProduct";

export async function listProducts(req: Request, res: Response) {

    const useCase = new ListProductsUseCase();
    const result = await useCase.handle();

    return processResult(res, result);
};

interface GetParams {
    id: string;
}

export async function getProduct(req: Request<GetParams>, res: Response) {

    const { id } = req.params

    const useCase = new GetProductUseCase();
    const result = await useCase.handle(id);

    return processResult(res, result);
};

export async function createProduct(req: Request<{}, {}, ProductEntity>, res: Response) {

    const product = req.body

    const useCase = new CreateProductUseCase();
    const result = await useCase.handle(product);

    return processResult(res, result);
};

export async function updateProduct(req: Request<{id: string}, {}, Omit<ProductEntity, 'id'>>, res: Response) {

    const { id } = req.params
    const productData = req.body

    const useCase = new UpdateProductUseCase();
    const result = await useCase.handle({ id, ...productData });

    return processResult(res, result);
};

export async function deleteProduct(req: Request<{id: string}>, res: Response) {

    const { id } = req.params;
    const useCase = new DeleteProductUseCase();
    const result = await useCase.handle(id);

    return processResult(res, result);
};