"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeController = void 0;
const like_service_1 = require("../service/like-service");
class LikeController {
    constructor() {
        this.getAll = async (req, res) => {
            let likes = await this.likeService.findAll;
            return res.status(200).json(likes);
        };
        this.add = async (req, res) => {
            let likes = await this.likeService.add(req, res);
            return res.status(200).json(likes);
        };
        this.edit = async (req, res) => {
            let likes = await this.likeService.edit(req, res);
            return res.status(200).json(likes);
        };
        this.delete = async (req, res) => {
            let likes = await this.likeService.delete(req, res);
            return res.status(200).json(likes);
        };
        this.likeService = new like_service_1.LikeService();
    }
}
exports.LikeController = LikeController;
exports.default = new LikeController();
//# sourceMappingURL=like-controller.js.map