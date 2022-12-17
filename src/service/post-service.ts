import {AppDataSource} from "../data-source";
import {Post} from "../model/post";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

export class PostService{
    private postRepository: any;
    constructor() {
        AppDataSource.initialize().then(connection=>{
            console.log('Connect Database Success!')
            this.postRepository = connection.getRepository(Post);
        })
        this.postRepository= AppDataSource.getRepository(Post);
    }
    findAll = async (req:Request,res:Response)=>{
        let posts = await this.postRepository.query(`select * from posts join users on idU = users.id`);
        return res.status(200).json(posts);
    }

    save = async (req:Request,res:Response)=>{
        console.log("cave")
        let post = req.body;
        let posts = await this.postRepository.save(post)
        return res.status(200).json(posts)

        // let files = req.files;
        // if (files != null){
        //     let post = req.body;
        //     let img = files.img as UploadedFile;
        //     await img.mv('./public/storage/' + img.name);
        //     post.img = 'storage/' +img.name;
        //    let posts= await this.postRepository.save(post);
        //     res.redirect(301,'posts');
        //     return res.status(200).json(posts)
        //
        // }
    }
    findById = async (req:Request,res:Response)=>{
        let id = +req.params.id;
        let posts = await this.postRepository.query(`select * from posts join users on idU= users.id where posts.id = ${id}`);
        return res.status(200).json(posts);
    }
    finByName = async (req:Request,res:Response)=>{
        let nameFind = req.body.name;
        let posts = await this.postRepository.query(`select * from posts join users on idU= users.id where posts.name like '%${nameFind}%'`)
        return res.status(200).json(posts);
    }
    edit = async (req:Request,res:Response)=>{
        let files = req.files;
        let id= +req.params.id;
        if (files != null){
            let post = req.body;
            let img = files.img as UploadedFile;
            await img.mv('./public/storage/' + img.name);
            post.img = 'storage/' +img.name;
           let posts= await this.postRepository.update({id:id},post);
            return res.status(200).json(posts);
        }
    }
    delete = async (req:Request,res:Response)=>{
        let id= +req.params.id;
        let posts =await this.postRepository.delete(id);
        return res.status(200).json(posts);
    }
}

export default new PostService();
