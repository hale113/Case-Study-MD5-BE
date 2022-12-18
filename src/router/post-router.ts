import {Router} from "express";
import postController from "../controller/post-controller";

export const routerPost = Router();
routerPost.get('/posts',postController.getAll);
routerPost.post('/add', postController.add);
routerPost.put('/:id',postController.edit);
routerPost.delete('/:id',postController.delete);

