import {Request, Response} from "express";
import {UserService} from "../service/user-service";
import {PostService} from "../service/post-service";
import {CommentService} from "../service/comment-service";

export class CommentController{
    private commentService: CommentService;
    private userService: UserService;
    private postService: PostService;
    constructor() {
        this.commentService = new CommentService()
        this.postService = new PostService();
        this.userService = new UserService();
    }
    getAll = async (req:Request,res:Response)=>{
        let comments = await this.commentService.findAll(req,res);
        let posts = await this.postService.findAll(req,res);
        let users = await this.userService.finAll(req,res);
        res.render('comment/list',{
            listComment: comments,
            listPost: posts,
            listUser: users
        })
    }
}

export default new CommentController();