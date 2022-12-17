import {AppDataSource} from "../data-source";
import {PostLike} from "../model/post-like";
import {Request, Response} from "express";

export class PostLikeService {
    private postLikeRepository: any;
    constructor() {
        this.postLikeRepository = AppDataSource.getRepository(PostLike);
    }
    findAll = async (req: Request, res: Response) => {
        let postLikes = await this.postLikeRepository.query(`select *
                                                             from post-likes join users
                                                             on idU = users.id join posts on idP = posts.id`);
        return res.status(200).json(postLikes);
    }
}