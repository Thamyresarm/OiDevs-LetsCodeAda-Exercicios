import { Router } from 'express';
import { validationsMiddleware } from '../middlewares/validations';
import { 
  createUser, 
  deleteUser, 
  getUser, 
  listUsers, 
  updateUser
} from '../controllers/user';
import { 
  editUserValidations, 
  userIdValidation, 
  userValidations 
} from '../validators/user';

const userRoutes = Router();

userRoutes.get('/', listUsers);
userRoutes.get('/:id', getUser);
userRoutes.post('/', userValidations, validationsMiddleware, createUser);
userRoutes.put('/:id', editUserValidations, validationsMiddleware, updateUser);
userRoutes.delete('/:id', userIdValidation, validationsMiddleware, deleteUser);

export default userRoutes;