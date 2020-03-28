import { Express } from "express";
import { TrainingRouteController } from "./routeControllers/training.routeController";

export class Routes {

    private routeController: TrainingRouteController;

    constructor(app: Express, routeController: TrainingRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.routes("/trainings").get(this.routeController.getTrainings);
        app.routes("/trainings/:type").get(this.routeController.getTrainingsByType);
    }
}
