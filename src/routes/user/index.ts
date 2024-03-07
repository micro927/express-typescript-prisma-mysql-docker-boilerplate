import express from 'express';
import { USERS_ROUTE } from '../../constants/routePath';
import { allUsersController } from '../../controllers/user';
const usersRouter = express.Router();

usersRouter.get(USERS_ROUTE.ALL, async (_req, res) => {
  const response = await allUsersController();
  return res.send(response);
});

export default usersRouter;
