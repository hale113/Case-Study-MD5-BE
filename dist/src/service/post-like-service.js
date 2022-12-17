"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLikeService = void 0;
const data_source_1 = require("../data-source");
const post_like_1 = require("../model/post-like");
class PostLikeService {
    constructor() {
        this.findAll = async (req, res) => {
            let postLikes = await this.postLikeRepository.query(`select *
                                                             from post-likes join users
                                                             on idU = users.id join posts on idP = posts.id`);
            return res.status(200).json(postLikes);
        };
        this.postLikeRepository = data_source_1.AppDataSource.getRepository(post_like_1.PostLike);
    }
}
exports.PostLikeService = PostLikeService;
//# sourceMappingURL=post-like-service.js.map