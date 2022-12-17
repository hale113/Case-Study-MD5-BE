import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";
import {Request, Response} from "express";
import {Post} from "../model/post";

export class CommentService{
    private commentRepository: any;
    constructor() {
            this.commentRepository =AppDataSource.getRepository(Comment);
    }
    findAll = async (req:Request,res:Response)=>{
        let comments = await this.commentRepository.query(`select * from comments join users on idU = users.id join posts on idP = posts.id`);
        return res.status(200).json(comments);
    }

}