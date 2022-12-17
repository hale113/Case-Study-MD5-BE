import {Router} from "express";
import postController from "../controller/post-controller";

export const routerPost = Router();
routerPost.get('/posts',postController.getAll);
routerPost.get('/create',postController.showFormCreate);
routerPost.post('/create', postController.create);
routerPost.get('/edit/:id',postController.showFormEdit);
routerPost.post('/edit/:id',postController.edit);
routerPost.get('/delete/:id',postController.showFormDelete);
routerPost.post('/delete/:id',postController.delete);
routerPost.post('/products', postController.showFinName);

