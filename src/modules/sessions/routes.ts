import { Express } from "express";
import { SessionRouteController } from "./routeControllers/session.routeController";

export class Routes {

    private routeController: SessionRouteController;

    constructor(app: Express, routeController: SessionRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/sessions").get(this.routeController.getSessions);
    }
}
