"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPostLike = void 0;
const express_1 = require("express");
const like_controller_1 = __importDefault(require("../controller/like-controller"));
exports.routerPostLike = (0, express_1.Router)();
exports.routerPostLike.get('/post-like', like_controller_1.default.getAll);
//# sourceMappingURL=like-router.js.map