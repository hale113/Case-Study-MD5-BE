"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_service_1 = require("../service/post-service");
const user_service_1 = require("../service/user-service");
class PostController {
    constructor() {
        this.getAll = async (req, res) => {
            let users = await this.userService.finAll(req, res);
            let posts = await this.postService.findAll(req, res);
            res.render('post/list', {
                listPost: posts,
                listUser: users
            });
        };
        this.showFinName = async (req, res) => {
            let posts = await this.postService.finByName(req, res);
            let users = await this.userService.finAll(req, res);
            res.render('post/list', {
                listPost: posts,
                listUser: users
            });
        };
        this.showFormCreate = async (req, res) => {
            let posts = await this.postService.findAll(req, res);
            let users = await this.userService.finAll(req, res);
            res.render('post/create', {
                listPost: posts,
                listUser: users
            });
        };
        this.create = async (req, res) => {
            await this.postService.save(req, res);
        };
        this.showFormEdit = async (req, res) => {
            if ((+req.params.id) != null) {
                let users = await this.userService.finAll(req, res);
                let posts = await this.postService.findById(req, res);
                res.render('post/edit', {
                    listPost: posts,
                    lisUser: users
                });
            }
        };
        this.edit = async (req, res) => {
            await this.postService.edit(req, res);
        };
        this.showFormDelete = async (req, res) => {
            res.render('post/delete');
        };
        this.delete = async (req, res) => {
            await this.postService.delete(req, res);
        };
        this.userService = new user_service_1.UserService();
        this.postService = new post_service_1.PostService();
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=post-controller.js.map