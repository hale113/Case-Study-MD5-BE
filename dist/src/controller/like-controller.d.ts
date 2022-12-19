import { Request, Response } from "express";
export declare class LikeController {
    private posLikeService;
    private userService;
    private postService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: LikeController;
export default _default;
