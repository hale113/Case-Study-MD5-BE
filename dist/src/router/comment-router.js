"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerComment = void 0;
const express_1 = require("express");
const comment_controller_1 = __importDefault(require("../controller/comment-controller"));
exports.routerComment = (0, express_1.Router)();
exports.routerComment.get('/comments', comment_controller_1.default.getAll);
//# sourceMappingURL=comment-router.js.map