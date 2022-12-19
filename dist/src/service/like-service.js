"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const data_source_1 = require("../data-source");
const like_1 = require("../model/like");
class LikeService {
    constructor() {
        this.findAll = async (req, res) => {
            let likes = await this.likeRepository.find();
            return res.status(200).json(likes);
        };
        this.add = async (req, res) => {
            let like = req.body;
            let likes = await this.likeRepository.save(like);
            return likes;
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let like = req.body;
            let likes = await this.likeRepository.update({ id: id }, like);
            return likes;
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let likes = await this.likeRepository.delete(id);
            return likes;
        };
        this.likeRepository = data_source_1.AppDataSource.getRepository(like_1.Like);
    }
}
exports.LikeService = LikeService;
//# sourceMappingURL=like-service.js.map