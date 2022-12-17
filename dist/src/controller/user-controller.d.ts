import { Request, Response } from "express";
export declare class UserController {
    private userService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    save: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
