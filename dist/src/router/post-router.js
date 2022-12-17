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
exports.routerPost.get('/create', post_controller_1.default.showFormCreate);
exports.routerPost.post('/create', post_controller_1.default.create);
exports.routerPost.get('/edit/:id', post_controller_1.default.showFormEdit);
exports.routerPost.post('/edit/:id', post_controller_1.default.edit);
exports.routerPost.get('/delete/:id', post_controller_1.default.showFormDelete);
exports.routerPost.post('/delete/:id', post_controller_1.default.delete);
exports.routerPost.post('/products', post_controller_1.default.showFinName);
//# sourceMappingURL=post-router.js.map