import {LikeService} from "../service/like-service";
import {Request, Response} from "express";



export class LikeController {
    private likeService: LikeService;
    constructor() {
        this.likeService = new LikeService();
    }
    getAll = async (req:Request,res:Response)=>{
        let likes= await this.likeService.findAll;
        return res.status(200).json(likes);
    }
    add = async (req:Request,res:Response)=>{
        let likes= await this.likeService.add(req,res);
        return res.status(200).json(likes);
    }

    edit = async  (req:Request,res:Response)=>{
        let likes =  await this.likeService.edit(req,res);
        return res.status(200).json(likes);
    }
    delete= async  (req:Request,res:Response)=>{
        let likes= await this.likeService.delete(req,res);
        return res.status(200).json(likes)
    }
}
export default new LikeController()