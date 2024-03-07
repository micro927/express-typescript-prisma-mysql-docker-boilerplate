import express from 'express';
import { MAIN_ROUTE } from '../constants/routePath';
import authRouter from './auth';
import usersRouter from './user';

const router = express.Router();

router.use(MAIN_ROUTE.AUTH, authRouter);
router.use(MAIN_ROUTE.USERS, usersRouter);

export default router;
