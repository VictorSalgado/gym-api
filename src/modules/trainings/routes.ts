import { Express } from "express";
import { TrainingRouteController } from "./routeControllers/training.routeController";

export class Routes {

    private routeController: TrainingRouteController;

    constructor(app: Express, routeController: TrainingRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/trainings").get(this.routeController.getTrainings);
        app.route("/trainings/:type").get(this.routeController.getTrainingsByType);
        app.route("/trainings").post(this.routeController.addTraining);
        app.route("/trainings/:trainingId").patch(this.routeController.editTraining);
        app.route("/trainings/:trainingId").delete(this.routeController.deleteTraining);
    }
}
