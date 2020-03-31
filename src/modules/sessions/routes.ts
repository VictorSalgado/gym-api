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
        app.route("/sessions/:sessionId").get(this.routeController.getSessionById);
        app.route("/sessions").post(this.routeController.addSession);
        app.route("/sessions/:sessionId").patch(this.routeController.editSession);
        app.route("/sessions/:sessionId").delete(this.routeController.deleteSession);
    }
}
