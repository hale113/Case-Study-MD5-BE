"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const data_source_1 = require("../data-source");
const comment_1 = require("../model/comment");
class CommentService {
    constructor() {
        this.findAll = async (req, res) => {
            let comments = await this.commentRepository.find();
            return res.status(200).json(comments);
        };
        this.add = async (req, res) => {
            let comment = req.body;
            let comments = await this.commentRepository.save(comment);
            return comments;
        };
        this.edit = async (req, res) => {
            let id = +req.params.id;
            let comment = req.body;
            let comments = await this.commentRepository.update({ id: id }, comment);
            return comments;
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            let comments = await this.commentRepository.delete(id);
            return comments;
        };
        this.commentRepository = data_source_1.AppDataSource.getRepository(comment_1.Comment);
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=comment-service.js.map