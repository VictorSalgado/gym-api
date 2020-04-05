import { Express } from "express";
import { ExercisesRouteController } from "./routeControllers/exercises.routeController";

export class Routes {

    private routeController: ExercisesRouteController;

    constructor(app: Express, routeController: ExercisesRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/exercises").get(this.routeController.getExercises);
        app.route("/exercises/:exerciseId").get(this.routeController.getExerciseById);
        app.route("/exercises").post(this.routeController.createExercise);
        app.route("/exercises/:exerciseId").patch(this.routeController.updateExercise);
        app.route("/exercises/:exerciseId").delete(this.routeController.deleteExercise);
    }
}
