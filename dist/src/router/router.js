"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const post_router_1 = require("./post-router");
const user_router_1 = require("./user-router");
exports.router = (0, express_1.Router)();
exports.router.use('', post_router_1.routerPost);
exports.router.use('/user', user_router_1.routerUser);
//# sourceMappingURL=router.js.map