import {UserService} from "../service/user-service";
import {Request, Response} from "express";
export class UserController{
    private userService: UserService;
    constructor() {
        this.userService = new UserService()
    }
    getAll= async (req:Request,res:Response)=>{
        let users = await this.userService.finAll(req,res);
        res.render('users/list',{
            listUser: users
        })
    }
   save = async (req:Request,res:Response)=>{
        await this.userService.save(req,res);
   }
}
export default new UserController();