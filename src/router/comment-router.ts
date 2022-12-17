import {Router} from "express";
import commentController from "../controller/comment-controller";

export const routerComment = Router();
routerComment.get('/comments',commentController.getAll);