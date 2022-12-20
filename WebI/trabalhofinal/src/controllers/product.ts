import { Request, Response } from "express";
import { ProductEntity } from "../domain/entity/product";
import { CreateProductUseCase } from "../useCases/product/createProduct";
import { DeleteProductUseCase } from "../useCases/product/deleteProduct";
import { GetProductUseCase } from "../useCases/product/getProduct";
import { ListProductsUseCase } from "../useCases/product/listProduct";
import { UpdateProductUseCase } from "../useCases/product/updateProduct";

export async function listProducts(req: Request, res: Response) {

    const useCase = new ListProductsUseCase();
    const products = await useCase.handle();

    return res.json(products);
};

interface GetParams {
    id: string;
}

export async function getProduct(req: Request<GetParams>, res: Response) {

    const { id } = req.params

    const useCase = new GetProductUseCase();
    const product = await useCase.handle(id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found!',
        });
    }

    return res.send(product);
};

export async function createProduct(req: Request<{}, {}, ProductEntity>, res: Response) {

    const product = req.body

    const useCase = new CreateProductUseCase();
    const createdProduct = await useCase.handle(product);

    return res.json(createdProduct);
};

export async function updateProduct(req: Request<{id: string}, {}, Omit<ProductEntity, 'id'>>, res: Response) {

    const { id } = req.params

    const useCaseGet = new GetProductUseCase();
    const product = await useCaseGet.handle(id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found!',
        });
    }

    const productData = req.body

    const useCase = new UpdateProductUseCase();
    const updatedProduct = useCase.handle({ id, ...productData });

    return res.json(updatedProduct);
};


export async function deleteProduct(req: Request<{id: string}>, res: Response) {

    const { id } = req.params;

    const useCaseGet = new GetProductUseCase();
    const productExists = await useCaseGet.handle(id);

    if (!productExists) {
        return res.status(404).json({
            message: 'Product not found!',
        });
    }

    const useCase = new DeleteProductUseCase();
    await useCase.handle(id);

    return res.json({
        message: 'Product deleted succeeded!',
    });
};