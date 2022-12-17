import { Request, Response } from "express";
export declare class PostService {
    private postRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    finByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    edit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PostService;
export default _default;
