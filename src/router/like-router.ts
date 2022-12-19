import {Router} from "express";
import postLikeController from "../controller/like-controller";

export const routerPostLike = Router()
routerPostLike.get('/post-like',postLikeController.getAll);