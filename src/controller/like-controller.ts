import {LikeService} from "../service/like-service";
import {Request, Response} from "express";
import {UserService} from "../service/user-service";
import {PostService} from "../service/post-service";

export class LikeController {
    private posLikeService: LikeService;
    private userService: UserService;
    private postService: PostService;
    constructor() {
        this.postService = new PostService();
        this.posLikeService = new LikeService();
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
export default new LikeController()