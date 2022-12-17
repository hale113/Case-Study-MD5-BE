import { Request, Response } from "express";
export declare class PostLikeService {
    private postLikeRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
