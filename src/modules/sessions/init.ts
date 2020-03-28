import Express from "express";
import { SessionRouteController } from "./routeControllers/session.routeController";
import { Routes } from "./routes";

export class SessionModule {

    public routes: Routes;

    constructor(app: Express.Express) {
        this.routes = new Routes(app, new SessionRouteController());
    }
}
