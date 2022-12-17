import {AppDataSource} from "../data-source";
import {User} from "../model/user";
import {Request, Response} from "express";
import {Post} from "../model/post";

export class UserService{
    private userRepository:any;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    finAll= async(req:Request,res:Response)=>{
        let users= await this.userRepository.query(`select * from users`)
        return res.status(200).json(users);
    }
    save = async (req:Request,res:Response)=>{
        let user = req.body;
        let users = await this.userRepository.save(user)
        return res.status(200).json(users)
    }
}