import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";
import {Request, Response} from "express";

export class CommentService{
    private commentRepository: any;
    constructor() {
            this.commentRepository =AppDataSource.getRepository(Comment);
    }
    findAll = async (req:Request,res:Response)=>{
        let comments = await this.commentRepository.find();
            return res.status(200).json(comments);
    }

}