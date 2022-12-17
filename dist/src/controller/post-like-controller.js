"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLikeController = void 0;
const post_like_service_1 = require("../service/post-like-service");
const user_service_1 = require("../service/user-service");
const post_service_1 = require("../service/post-service");
class PostLikeController {
    constructor() {
        this.getAll = async (req, res) => {
            let posts = await this.postService.findAll(req, res);
            let postLikes = await this.posLikeService.findAll(req, res);
            let users = await this.userService.finAll(req, res);
            res.render('postLike/list', {
                listPost: posts,
                listPostLike: postLikes,
                listUser: users
            });
        };
        this.postService = new post_service_1.PostService();
        this.posLikeService = new post_like_service_1.PostLikeService();
        this.userService = new user_service_1.UserService();
    }
}
exports.PostLikeController = PostLikeController;
exports.default = new PostLikeController();
//# sourceMappingURL=post-like-controller.js.map