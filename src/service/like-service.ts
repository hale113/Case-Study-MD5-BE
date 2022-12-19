import {AppDataSource} from "../data-source";
import {Like} from "../model/like";
import {Request, Response} from "express";

export class LikeService {
    private likeRepository: any;
    constructor() {
        this.likeRepository = AppDataSource.getRepository(Like);
    }
    findAll = async (req: Request, res: Response) => {
        let likes = await this.likeRepository.find();
        return res.status(200).json(likes);
    }
    add = async (req:Request,res:Response)=>{
        let like = req.body;
        let likes = await this.likeRepository.save(like)
        return likes
    }
    edit = async (req:Request,res:Response)=>{
        let id= +req.params.id;
        let like = req.body;
        let likes= await this.likeRepository.update({id:id},like);
        return likes
    }
    delete = async (req:Request,res:Response)=>{
        let id= +req.params.id;
        let likes =await this.likeRepository.delete(id);
        return likes
    }
}