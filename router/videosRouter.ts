import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { VideosController } from "../controllers/videosController";

const videosRouter = express();
const videos = container.resolve(VideosController);

videosRouter.route("/api/v1/videos/:page/:qtd").get((request: Request, response: Response) => {
    return videos.get(request, response);
})

videosRouter.route("/api/v1/videos/:id").get((request: Request, response: Response) => {
    return videos.getById(request, response);
})

export default videosRouter;