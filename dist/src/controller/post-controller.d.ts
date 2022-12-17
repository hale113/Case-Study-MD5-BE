import { Request, Response } from "express";
export declare class PostController {
    private userService;
    private postService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    showFinName: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<void>;
    showFormDelete: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
