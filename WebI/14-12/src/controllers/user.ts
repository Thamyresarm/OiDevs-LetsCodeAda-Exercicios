import { Request, Response } from 'express';
import { UserDto } from '../domain/dtos/user';
import { CreateUserUseCase } from '../useCases/user/createUser';
import { DeleteUserCase } from '../useCases/user/deleteUser';
import { GetUserUseCase } from '../useCases/user/getUser';
import { ListUsersUseCase } from "../useCases/user/listUser";
import { UpdateUser } from '../useCases/user/updateUser';


export async function listUsers(request: Request, response: Response) {

    const useCase = new ListUsersUseCase();
    const users = await useCase.handle();
    return response.json(users);
}

interface GetParams {
    id: string;
  }

export async function getUser(request: Request<GetParams>, response: Response) {

    const { id } = request.params
    
    const useCase = new GetUserUseCase();
    const user = await useCase.handle(id);

    if (!user) {
        return response.status(404).json({
          message: 'User not found!',
        });
      }
    
      return response.send(user);
}

// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export async function createUser(request: Request<{}, {}, UserDto>, response: Response) {
    
  const user = request.body;

  // if (!user.name) {
  //   return response.status(400).json({
  //     field: 'name',
  //     message: 'Name is invalid!',
  //   });
  // }

  // if (!user.email || !emailRegex.test(user.email)) {
  //   return response.status(400).json({
  //     field: 'email',
  //     message: 'E-mail is invalid!',
  //   });
  // }

  const useCase = new CreateUserUseCase();
  const createdUser = await useCase.handle(user);
  
  return response.json(createdUser);
}

interface PutParams {
  id: string;
}

export async function updateUser(
  req: Request<{id: string}, {}, Omit<UserDto, 'id'>>,
  res: Response){

  const { id } = req.params;

  const useCaseGet = new GetUserUseCase();
  const user = await useCaseGet.handle(id);

  const userData = req.body

  // if (!user) {
  //   return response.status(404).json({
  //     message: 'User not found!',
  //   });
  // }

  // if (!user.name) {
  //   return response.status(400).json({
  //     field: 'name',
  //     message: 'Name is invalid!',
  //   });
  // }

  // if (!user.email || !emailRegex.test(user.email)) {
  //   return response.status(400).json({
  //     field: 'email',
  //     message: 'E-mail is invalid!',
  //   });
  // }

  const useCase = new UpdateUser();
  const updatedUser = useCase.handle({id, ...userData})

  return res.json(updatedUser);
}

interface DeleteParams {
  id: string;
}

export async function deleteUser(req: Request<{id: string}>, res: Response){
  
  const { id } = req.params;

  const useCaseGet = new GetUserUseCase();
  const userExists = await useCaseGet.handle(id);

  if (!userExists) {
    return res.status(404).json({
      message: 'User not found!',
    });
  }

  const useCase = new DeleteUserCase();
  await useCase.handle(id);

  return res.json({
    message: 'User deleted succeeded!',
  });
}