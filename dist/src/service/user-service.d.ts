import { Request, Response } from "express";
export declare class UserService {
    private userRepository;
    constructor();
    finAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
