import {Router} from "express";
import likeController from "../controller/like-controller";

export const likeRouter = Router()
likeRouter.get('',likeController.getAll);
likeRouter.post('/add',likeController.add);