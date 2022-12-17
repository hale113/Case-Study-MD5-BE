"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
class UserService {
    constructor() {
        this.finAll = async (req, res) => {
            let users = await this.userRepository.query(`select * from users`);
            return res.status(200).json(users);
        };
        this.save = async (req, res) => {
            let user = req.body;
            let users = await this.userRepository.save(user);
            return res.status(200).json(users);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map