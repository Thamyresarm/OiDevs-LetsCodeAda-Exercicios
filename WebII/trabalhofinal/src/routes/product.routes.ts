import { Router } from 'express';
import { 
  createProduct, 
  deleteProduct, 
  getProduct, 
  listProducts, 
  updateProduct
} from '../controllers/product';
import { validationsMiddleware } from '../middleware/validations';
import { editProductValidations, productIdValidation, productValidations } from '../validatiors/products';

const productRoutes = Router();

productRoutes.get('/', listProducts);
productRoutes.get('/:id', getProduct);
productRoutes.post('/', productValidations, validationsMiddleware, createProduct);
productRoutes.put('/:id', editProductValidations, validationsMiddleware, updateProduct);
productRoutes.delete('/:id', productIdValidation, validationsMiddleware, deleteProduct);

export default productRoutes;