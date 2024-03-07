import { PrismaClient } from '@prisma/client';
const { user } = new PrismaClient();

export const allUsersController = async () => {
  return await user.findMany();
};
