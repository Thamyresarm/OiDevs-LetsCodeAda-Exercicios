import { Request, Response } from 'express';
import { UserEntity } from '../domain/entity/user';
import { processResult } from '../presenters';
import { CreateUserUseCase } from '../useCases/user/createUser';
import { DeleteUserUseCase } from '../useCases/user/deleteUser';
import { GetUserUseCase } from '../useCases/user/getUser';
import { ListUsersUseCase } from "../useCases/user/listUser";
import { UpdateUserUseCase } from '../useCases/user/updateUser';


export async function listUsers(request: Request, response: Response) {

  const useCase = new ListUsersUseCase();
  const result = await useCase.handle();

  return processResult(response, result);
}

interface GetParams {
  id: string;
}

export async function getUser(request: Request<GetParams>, response: Response) {

  const { id } = request.params

  const useCase = new GetUserUseCase();
  const result = await useCase.handle(id);

  return processResult(response, result);
}

export async function createUser(request: Request<{}, {}, UserEntity>, response: Response) {

  const user = request.body;

  const useCase = new CreateUserUseCase();
  const result = await useCase.handle(user);

  return processResult(response, result);
}

export async function updateUser(
  request: Request<{ id: string }, {}, Omit<UserEntity, 'id'>>,
  response: Response) {

  const { id } = request.params;
  const userData = request.body

  const useCase = new UpdateUserUseCase();
  const result = await useCase.handle({ id, ...userData })

  return processResult(response, result);
}

export async function deleteUser(request: Request<{ id: string }>, response: Response) {

  const { id } = request.params;
  const useCase = new DeleteUserUseCase();
  const result = await useCase.handle(id);

  return processResult(response, result);
}