"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeController = void 0;
const like_service_1 = require("../service/like-service");
const user_service_1 = require("../service/user-service");
const post_service_1 = require("../service/post-service");
class LikeController {
    constructor() {
        this.getAll = async (req, res) => {
            let posts = await this.postService.findAll();
            let postLikes = await this.posLikeService.findAll(req, res);
            let users = await this.userService.findAll();
            res.render('postLike/list', {
                listPost: posts,
                listPostLike: postLikes,
                listUser: users
            });
        };
        this.postService = new post_service_1.PostService();
        this.posLikeService = new like_service_1.LikeService();
        this.userService = new user_service_1.UserService();
    }
}
exports.LikeController = LikeController;
exports.default = new LikeController();
//# sourceMappingURL=like-controller.js.map