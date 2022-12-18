import {Router} from "express";
import {postRouter} from "./post-router";
import {userRouter} from "./user-router";


export const router= Router();
router.use('/posts',postRouter);
router.use('/auth',userRouter);

