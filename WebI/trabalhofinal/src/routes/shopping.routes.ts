import { Router } from "express";
import { 
    createShopping, 
    getShoppingById, 
    getShoppingByUser, 
    updateStatusShopping 
} from "../controllers/shopping";
import { validationsMiddleware } from "../middleware/validations";
import { shoppingIdValidation, shoppingValidations } from "../validatiors/shopping";
import { userIdValidation } from "../validatiors/user";

const shoppingRoutes = Router();

shoppingRoutes.get('/:id', shoppingIdValidation, validationsMiddleware, getShoppingById);
shoppingRoutes.get('/user/:id', userIdValidation, validationsMiddleware, getShoppingByUser);
shoppingRoutes.post('/', shoppingValidations, validationsMiddleware, createShopping);
shoppingRoutes.put('/cancel/:id', shoppingIdValidation, validationsMiddleware, updateStatusShopping);

export default shoppingRoutes;