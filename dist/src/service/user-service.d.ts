import { Request, Response } from "express";
export declare class UserService {
    private userRepository;
    constructor();
    findAll: () => Promise<any>;
    add: (req: Request, res: Response) => Promise<any>;
    edit: (req: Request, res: Response) => Promise<any>;
    delete: (req: Request, res: Response) => Promise<any>;
}
