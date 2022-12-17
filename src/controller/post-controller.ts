import {PostService} from "../service/post-service";
import {UserService} from "../service/user-service";
import {Request, Response} from "express";

export class PostController{

    private userService: UserService
    private postService: PostService
    constructor() {
        this.userService= new UserService();
        this.postService= new PostService();
    }
    getAll = async (req:Request,res:Response)=>{
        let users = await this.userService.finAll(req,res);
        let posts = await this.postService.findAll(req,res);
        res.render('post/list',{
            listPost: posts,
            listUser: users
        })
    }
    showFinName = async  (req:Request,res:Response)=>{
        let posts = await this.postService.finByName(req,res);
        let users = await this.userService.finAll(req,res);
        res.render('post/list', {
            listPost: posts,
            listUser: users
        });
    }
    showFormCreate = async (req:Request,res:Response)=>{
        let posts = await this.postService.findAll(req,res);
        let users = await this.userService.finAll(req,res);
        res.render('post/create',{
            listPost: posts,
            listUser: users
        });
    }
    create = async (req:Request,res:Response)=>{
        await this.postService.save(req,res);
    }
    showFormEdit = async (req:Request,res:Response)=>{
        if ((+req.params.id) != null){
            let users = await this.userService.finAll(req,res);
            let posts = await this.postService.findById(req,res);
            res.render('post/edit',{
                listPost: posts,
                lisUser: users
            })
        }
    }
    edit = async  (req:Request,res:Response)=>{
        await this.postService.edit(req,res);
    }
    showFormDelete = async (req:Request,res:Response)=>{
        res.render('post/delete');
    }
    delete= async  (req:Request,res:Response)=>{
        await this.postService.delete(req,res);
    }
}
export default new PostController();