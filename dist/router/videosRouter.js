"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const videosController_1 = require("../controllers/videosController");
const videosRouter = (0, express_1.default)();
const videos = tsyringe_1.container.resolve(videosController_1.VideosController);
videosRouter.route("/api/v1/videos/:page/:qtd").get((request, response) => {
    return videos.get(request, response);
});
videosRouter.route("/api/v1/videos/:id").get((request, response) => {
    return videos.getById(request, response);
});
exports.default = videosRouter;
