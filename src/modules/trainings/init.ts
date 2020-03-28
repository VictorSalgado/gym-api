import Express from "express";
import { TrainingRouteController } from "./routeControllers/training.routeController";
import { Routes } from "./routes";

export class TrainingModule {

    public routes: Routes;

    constructor(app: Express.Express) {
        this.routes = new Routes(app, new TrainingRouteController());
    }
}
