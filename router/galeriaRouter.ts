import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { GaleriaController } from "../controllers/galeriaController";

const galeriaRouter = express();
const galeria = container.resolve(GaleriaController);

galeriaRouter.route("/api/v1/galeria/:page/:qtd").get((request: Request, response: Response) => {
    return galeria.get(request, response);
})

galeriaRouter.route("/api/v1/galeria/:id").get((request: Request, response: Response) => {
    return galeria.getById(request, response);
})

export default galeriaRouter;