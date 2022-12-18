"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const user_service_1 = require("../service/user-service");
const post_service_1 = require("../service/post-service");
const comment_service_1 = require("../service/comment-service");
class CommentController {
    constructor() {
        this.getAll = async (req, res) => {
            let comments = await this.commentService.findAll(req, res);
            let posts = await this.postService.findAll();
            let users = await this.userService.findAll();
            res.render('comment/list', {
                listComment: comments,
                listPost: posts,
                listUser: users
            });
        };
        this.commentService = new comment_service_1.CommentService();
        this.postService = new post_service_1.PostService();
        this.userService = new user_service_1.UserService();
    }
}
exports.CommentController = CommentController;
exports.default = new CommentController();
//# sourceMappingURL=comment-controller.js.map