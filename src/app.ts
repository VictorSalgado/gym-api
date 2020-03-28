import * as bodyParser from "body-parser";
import express, { Express } from "express";
import { SessionModule } from "./modules/sessions/init";
import { UsersModule } from "./modules/users/init";

class App {

    public app: Express = express();

    constructor() {
        this.config();
        this.initModules();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private initModules(): void {
        const userModule = new UsersModule(this.app);
        const sessionModule = new SessionModule(this.app);
    }
}

export default new App();
