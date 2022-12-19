import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { NewsController } from "../controllers/newsController";

const newsRouter = express();
const news = container.resolve(NewsController);

newsRouter.route("/api/v1/news/:page/:qtd").get((request: Request, response: Response) => {
    return news.get(request, response);
})

newsRouter.route("/api/v1/news/:id").get((request: Request, response: Response) => {
    return news.getById(request, response);
})

export default newsRouter;