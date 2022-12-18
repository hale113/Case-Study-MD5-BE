"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPost = void 0;
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controller/post-controller"));
exports.routerPost = (0, express_1.Router)();
exports.routerPost.get('/posts', post_controller_1.default.getAll);
exports.routerPost.post('/add', post_controller_1.default.add);
exports.routerPost.put('/:id', post_controller_1.default.edit);
exports.routerPost.delete('/:id', post_controller_1.default.delete);
//# sourceMappingURL=post-router.js.map