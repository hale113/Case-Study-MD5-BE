import {PostLikeService} from "../service/post-like-service";
import {Request, Response} from "express";
import {UserService} from "../service/user-service";
import {PostService} from "../service/post-service";

export class PostLikeController{
    private posLikeService: PostLikeService;
    private userService: UserService;
    private postService: PostService;
    constructor() {
        this.postService = new PostService();
        this.posLikeService = new PostLikeService();
        this.userService = new UserService();
    }
    getAll = async (req:Request,res:Response)=>{
        let posts = await this.postService.findAll();
        let postLikes = await this.posLikeService.findAll(req,res);
        let users = await this.userService.findAll();
        res.render('postLike/list',{
            listPost: posts,
            listPostLike:postLikes,
            listUser: users
        });
    }
}
export default new PostLikeController()