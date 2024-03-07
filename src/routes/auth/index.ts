import express from 'express';
import { AUTH_ROUTE } from '../../constants/routePath';
import { loginController, logoutController } from '../../controllers/auth';

const authRouter = express.Router();

authRouter.get(AUTH_ROUTE.LOGIN, async (_req, res) => {
  const controller = loginController();
  const response = await controller;
  return res.send(response);
});

authRouter.get(AUTH_ROUTE.LOGOUT, async (_req, res) => {
  const controller = logoutController();
  const response = await controller;
  return res.send(response);
});

export default authRouter;
