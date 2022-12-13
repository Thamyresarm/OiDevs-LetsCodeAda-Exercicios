import { Request, Response, Router } from 'express';
// import { User } from '../domain/entities/user';
import { UserDto } from '../domain/dtos/user';
import { v4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

// Mapeamento as rotas
// /users
const userRoutes = Router();
const prisma = new PrismaClient();

// let users: User[] = [];

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

userRoutes.get('/', async (request: Request, response: Response) => {

  const users = await prisma.user.findMany({
    include: {
      city: true
    }
  });
   return response.json(users);
});

interface GetParams {
  id: string;
}

userRoutes.get('/:id', async (request: Request<GetParams>, response: Response) => {
  
  const { id } = request.params;

  const user = await prisma.user.findFirst({
    where: {
      id: {
        equals: id
      }
    },

    include: {
      city: true
    }
  })
  
  // const user = users.find((x) => x.id == id);

  if (!user) {
    return response.status(404).json({
      message: 'User not found!',
    });
  }

  return response.send(user);
});

userRoutes.post(
  '/',
  (request: Request<{}, {}, UserDto>, response: Response) => {
    const user = request.body;

    if (!user.id) {
      return response.status(400).json({
        field: 'id',
        message: 'Id is invalid!',
      });
    }

    if (!user.name) {
      return response.status(400).json({
        field: 'name',
        message: 'Name is invalid!',
      });
    }

    if (!user.email || !emailRegex.test(user.email)) {
      return response.status(400).json({
        field: 'email',
        message: 'E-mail is invalid!',
      });
    }

    users.push(user);
    return response.json(user);
  }
);

interface PutParams {
  id: number;
}

userRoutes.put(
  '/:id',
  (
    request: Request<PutParams, {}, Omit<UserDto, 'id'>>,
    response: Response
  ) => {
    const { id } = request.params;
    const userIndex = users.findIndex((x) => x.id == id);

    if (userIndex === -1) {
      // Retornar que não encontrou
      return response.status(404).json({
        message: 'User not found!',
      });
    }

    users[userIndex].name = request.body.name;
    users[userIndex].email = request.body.email;

    return response.json(users[userIndex]);
  }
);

interface DeleteParams {
  id: number;
}

userRoutes.delete(
  '/:id',
  (request: Request<DeleteParams>, response: Response) => {
    const { id } = request.params;

    // Procurar se o usuário existe
    const userIndex = users.findIndex((x) => x.id == id);
    const userExists = userIndex > -1;

    if (!userExists) {
      return response.status(404).json({
        message: 'User not found!',
      });
    }

    users = users.filter((x) => x.id != id);
    return response.json({
      message: 'User deleted succeeded!',
    });
  }
);

export default userRoutes;