import {Router} from "express";
import {routerPost} from "./post-router";
import {routerUser} from "./user-router";

export const router= Router();
router.use('',routerPost)
router.use('/user',routerUser)