import express from 'express';
const route = express.Router();

import { userExists } from '../middlewares/global.middlewares.js';

import userController from '../controllers/user.controller.js';

route.post('/', userExists, userController.create);

export default route;