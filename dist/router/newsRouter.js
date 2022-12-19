"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const newsController_1 = require("../controllers/newsController");
const newsRouter = (0, express_1.default)();
const news = tsyringe_1.container.resolve(newsController_1.NewsController);
newsRouter.route("/api/v1/news/:page/:qtd").get((request, response) => {
    return news.get(request, response);
});
newsRouter.route("/api/v1/news/:id").get((request, response) => {
    return news.getById(request, response);
});
exports.default = newsRouter;
