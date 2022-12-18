"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let posts = await this.userService.findAll();
            return res.status(200).json(posts);
        };
        this.add = async (req, res) => {
            let posts = await this.userService.add(req, res);
            return res.status(200).json(posts);
        };
        this.edit = async (req, res) => {
            let posts = await this.userService.edit(req, res);
            return res.status(200).json(posts);
        };
        this.delete = async (req, res) => {
            let posts = await this.userService.delete(req, res);
            return res.status(200).json(posts);
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map