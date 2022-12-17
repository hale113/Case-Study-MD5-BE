"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let users = await this.userService.finAll(req, res);
            res.render('users/list', {
                listUser: users
            });
        };
        this.save = async (req, res) => {
            await this.userService.save(req, res);
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map