import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { PodcastController } from "../controllers/podcastController";

const podcastRouter = express();
const podcast = container.resolve(PodcastController);

podcastRouter.route("/api/v1/podcast/:page/:qtd").get((request: Request, response: Response) => {
    return podcast.get(request, response);
})

podcastRouter.route("/api/v1/podcast/:id").get((request: Request, response: Response) => {
    return podcast.getById(request, response);
})

export default podcastRouter;