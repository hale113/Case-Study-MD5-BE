import { Request, Response } from "express";
export declare class CommentController {
    private commentService;
    private userService;
    private postService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CommentController;
export default _default;
