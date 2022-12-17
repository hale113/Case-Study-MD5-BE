import {Router} from "express";
import userController  from "../controller/user-controller";

export const routerUser = Router();
routerUser.get('',userController.getAll);
routerUser.post('/add',userController.save);