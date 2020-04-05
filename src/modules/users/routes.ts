import { Express } from "express";
import { UsersRouteController } from "./routeControllers/users.routeController";

export class Routes {

    private routeController: UsersRouteController;

    constructor(app: Express, routeController: UsersRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/login").post(this.routeController.login);
        app.route("/users").get(this.routeController.getUsers);
        app.route("/users").post(this.routeController.createUser);
        app.route("/users/:userId").get(this.routeController.getUserById);
        app.route("/users/:userId").patch(this.routeController.updateUser);
        app.route("/users/:userId").delete(this.routeController.deleteUser);
    }
}
