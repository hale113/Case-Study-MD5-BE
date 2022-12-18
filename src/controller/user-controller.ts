import {UserService} from "../service/user-service";
import {Request, Response} from "express";
export class UserController{
    private userService: UserService;
    constructor() {
        this.userService = new UserService()
    }
    getAll = async (req:Request,res:Response)=>{
        let posts = await this.userService.findAll();
        return res.status(200).json(posts);
    }

    add = async (req:Request,res:Response)=>{
        let posts= await this.userService.add(req,res);
        return res.status(200).json(posts);
    }

    edit = async  (req:Request,res:Response)=>{
        let posts =  await this.userService.edit(req,res);
        return res.status(200).json(posts);
    }
    delete= async  (req:Request,res:Response)=>{
        let posts= await this.userService.delete(req,res);
        return res.status(200).json(posts)
    }
}
export default new UserController();