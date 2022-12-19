"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const data_source_1 = require("../data-source");
const like_1 = require("../model/like");
class LikeService {
    constructor() {
        this.findAll = async (req, res) => {
            let postLikes = await this.postLikeRepository.find();
            return res.status(200).json(postLikes);
        };
        this.postLikeRepository = data_source_1.AppDataSource.getRepository(like_1.Like);
    }
}
exports.LikeService = LikeService;
//# sourceMappingURL=like-service.js.map