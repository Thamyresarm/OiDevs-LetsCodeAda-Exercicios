import { Router } from 'express';
import { 
  createUser, 
  deleteUser, 
  getUser, 
  listUsers, 
  updateUser
} from '../controllers/user';
import { validationsMiddleware } from '../middleware/validations';
import { 
  editUserValidations, 
  userIdValidation, 
  userValidations 
} from '../validatiors/user';

const userRoutes = Router();

userRoutes.get('/', listUsers);
userRoutes.get('/:id', getUser);
userRoutes.post('/', userValidations, validationsMiddleware, createUser);
userRoutes.put('/:id', editUserValidations, validationsMiddleware, updateUser);
userRoutes.delete('/:id', userIdValidation, validationsMiddleware, deleteUser);

export default userRoutes;