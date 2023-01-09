import { Router } from "express";

import productRoutes from './product.routes';
import shoppingRoutes from "./shopping.routes";
import userRoutes from './user.routes';

const routes = Router();

routes.use('/shopping', shoppingRoutes);
routes.use('/product', productRoutes);
routes.use('/user', userRoutes);

export default routes;