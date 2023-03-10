import {UserService} from "../service/user-service";
import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
export class UserController{
    private userService: UserService;
    constructor() {
        this.userService = new UserService()
    }
    register = async (req:Request,res:Response)=>{
    let user = req.body;
    let userFind = await this.userService.login(user.name);
    if (userFind.length){
        res.status(200).json({
            mess:"Tài khoản đã tồn tại!!! ",
            checkR: false
        })
    }else {
        user.password = await bcrypt.hash(user.password, 10);
        let users= await this.userService.add(user);
        return res.status(201).json({
            users: users,
            checkR: true
        })
    }
}

    login = async (req:Request,res:Response)=>{
        let user = req.body;
        let userFind = await this.userService.login(user.name);
        if(userFind.length==0){
            return res.json({mess:'sai rui'})
        }
        if (userFind[0]){
            let comparePassword = await bcrypt.compare(user.password, userFind[0].password)
            if (!comparePassword) {
                return res.json({
                    mess: comparePassword
                })

            } else {
                let payload = {
                    id: userFind[0].id,
                    name: userFind[0].name
                }
                let secret = 'ha'
                let token = await jwt.sign(payload, secret, {
                    expiresIn: 36000
                });

                return res.json({
                    token: token,
                    user: userFind[0],
                    mess: comparePassword
                })
            }
        }
    }

    finByName =async (req:Request,res:Response)=>{
        let user = req.body;
        console.log(user)
        let userFind = await this.userService.findByName(user.name);
        return res.status(201).json(userFind)
    }

    getAll = async (req:Request,res:Response)=>{
        let users = await this.userService.findAll();
        return res.status(200).json(users);
    }

    edit = async  (req:Request,res:Response)=>{
        let users =  await this.userService.edit(req,res);
        return res.status(200).json(users);
    }

    delete= async  (req:Request,res:Response)=>{
        let users= await this.userService.delete(req,res);
        return res.status(200).json(users)
    }
}
export default new UserController();
