"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const data_source_1 = require("../data-source");
const post_1 = require("../model/post");
class PostService {
    constructor() {
        this.findAll = async (req, res) => {
            let posts = await this.postRepository.query(`select * from posts join users on idU = users.id`);
            return res.status(200).json(posts);
        };
        this.save = async (req, res) => {
            console.log("cave");
            let post = req.body;
            let posts = await this.postRepository.save(post);
            return res.status(200).json(posts);
        };
        this.findById = async (req, res) => {
            let id = +req.params.id;
            let posts = await this.postRepository.query(`select * from posts join users on idU= users.id where posts.id = ${id}`);
            return res.status(200).json(posts);
        };
        this.finByName = async (req, res) => {
            let nameFind = req.body.name;
            let posts = await this.postRepository.query(`select * from posts join users on idU= users.id where posts.name like '%${nameFind}%'`);
            return res.status(200).json(posts);
        };
        this.edit = async (req, res) => {
            let files = req.files;
            let id = +req.params.id;
            if (files != null) {
                let post = req.body;
                let img = files.img;
                await img.mv('./public/storage/' + img.name);
                post.img = 'storage/' + img.name;
                let posts = await this.postRepository.update({ id: id }, post);
                return res.status(200).json(posts);
            }
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let posts = await this.postRepository.delete(id);
            return res.status(200).json(posts);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect Database Success!');
            this.postRepository = connection.getRepository(post_1.Post);
        });
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
    }
}
exports.PostService = PostService;
exports.default = new PostService();
//# sourceMappingURL=post-service.js.map