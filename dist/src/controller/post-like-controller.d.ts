import { Request, Response } from "express";
export declare class PostLikeController {
    private posLikeService;
    private userService;
    private postService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostLikeController;
export default _default;
