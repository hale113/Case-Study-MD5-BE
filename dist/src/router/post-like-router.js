"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPostLike = void 0;
const express_1 = require("express");
const post_like_controller_1 = __importDefault(require("../controller/post-like-controller"));
exports.routerPostLike = (0, express_1.Router)();
exports.routerPostLike.get('/post-like', post_like_controller_1.default.getAll);
//# sourceMappingURL=post-like-router.js.map