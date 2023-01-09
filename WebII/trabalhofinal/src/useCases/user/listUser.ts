import { PrismaClient } from '@prisma/client';
import { toUserResponse } from '../../maps/user';
import { IPresenter, SuccessPresenter } from '../../presenters';

const prisma = new PrismaClient();

export class ListUsersUseCase {
  constructor() {}

  async handle(): Promise<IPresenter> {
    const users = await prisma.user.findMany({});
    const usersResponse = users.map((user) => toUserResponse(user));

    return new SuccessPresenter(usersResponse);
  }
}

