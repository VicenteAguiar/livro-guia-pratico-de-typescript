"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const galeriaController_1 = require("../controllers/galeriaController");
const galeriaRouter = (0, express_1.default)();
const galeria = tsyringe_1.container.resolve(galeriaController_1.GaleriaController);
galeriaRouter.route("/api/v1/galeria/:page/:qtd").get((request, response) => {
    return galeria.get(request, response);
});
galeriaRouter.route("/api/v1/galeria/:id").get((request, response) => {
    return galeria.getById(request, response);
});
exports.default = galeriaRouter;
