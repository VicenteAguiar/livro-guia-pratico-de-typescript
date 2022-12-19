import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import Database from "./infra/db";
import { container } from "tsyringe";
import "./shared/container";
import newsRouter from "./router/newsRouter";
import videosRouter from "./router/videosRouter";
import podcastRouter from "./router/podcastRouter";
import galeriaRouter from "./router/galeriaRouter";


class StartUp {
    public app: Application;
    private _db = new Database();

    constructor(){
        this.app = express();
        this._db.createConnection();
        this.routes();
    }

    routes(){
        this.app.route("/").get((request: Request, response: Response) => {
            response.send({ versao: "0.0.1" });
        })

        this.app.use("/", newsRouter);
        this.app.use("/", videosRouter);
        this.app.use("/", galeriaRouter);
        this.app.use("/", podcastRouter);
            
    }
}

export default new StartUp();