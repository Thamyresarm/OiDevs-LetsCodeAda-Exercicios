import { Request, Response } from 'express';
import { UserEntity } from '../domain/entity/user';
import { CreateUserUseCase } from '../useCases/user/createUser';
import { DeleteUserUseCase } from '../useCases/user/deleteUser';
import { GetUserUseCase } from '../useCases/user/getUser';
import { ListUsersUseCase } from "../useCases/user/listUser";
import { UpdateUserUseCase } from '../useCases/user/updateUser';


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

export async function createUser(request: Request<{}, {}, UserEntity>, response: Response) {

  const user = request.body;

  const useCase = new CreateUserUseCase();
  const createdUser = await useCase.handle(user);

  return response.json(createdUser);
}

export async function updateUser(
  request: Request<{ id: string }, {}, Omit<UserEntity, 'id'>>,
  response: Response) {

  const { id } = request.params;

  const useCaseGet = new GetUserUseCase();
  const user = await useCaseGet.handle(id);

  const userData = request.body

  if (!user) {
    return response.status(404).json({
      message: 'User not found!',
    });
  }

  const useCase = new UpdateUserUseCase();
  const updatedUser = useCase.handle({ id, ...userData })

  return response.json(updatedUser);
}

export async function deleteUser(request: Request<{ id: string }>, response: Response) {

  const { id } = request.params;

  const useCaseGet = new GetUserUseCase();
  const userExists = await useCaseGet.handle(id);

  if (!userExists) {
    return response.status(404).json({
      message: 'User not found!',
    });
  }

  const useCase = new DeleteUserUseCase();
  await useCase.handle(id);

  return response.json({
    message: 'User deleted succeeded!',
  });
}