import {AppDataSource} from "../data-source";
import {Like} from "../model/like";
import {Request, Response} from "express";

export class LikeService {
    private postLikeRepository: any;
    constructor() {
        this.postLikeRepository = AppDataSource.getRepository(Like);
    }
    findAll = async (req: Request, res: Response) => {
        let postLikes = await this.postLikeRepository.find();
        return res.status(200).json(postLikes);
    }
}