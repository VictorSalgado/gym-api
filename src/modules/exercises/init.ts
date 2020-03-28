import Express from "express";
import { ExercisesRouteController } from "./routeControllers/exercises.routeController";
import { Routes } from "./routes";

export class UsersModule {

    public routes: Routes;

    constructor(app: Express.Express) {
        this.routes = new Routes(app, new ExercisesRouteController());
    }
}
