import { User } from '@prisma/client';
import { UserDataResponse } from '../domain/responses/user';

export function toUserResponse(user: User): UserDataResponse {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}