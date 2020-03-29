import * as bodyParser from "body-parser";
import express, { Express } from "express";
import { ExerciseModule } from "./modules/exercises/init";
import { SessionModule } from "./modules/sessions/init";
import { TrainingModule } from "./modules/trainings/init";
import { UsersModule } from "./modules/users/init";

class App {

    public app: Express = express();
    public db = null;

    constructor() {
        this.config();
        this.initDB();
        this.initModules();
    }

    public database() {
        return this.db;
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private initModules(): void {
        const userModule = new UsersModule(this.app);
        const sessionModule = new SessionModule(this.app);
        const trianingModule = new TrainingModule(this.app);
        const exerciseModule = new ExerciseModule(this.app);
    }

    private initDB(): void {

        const sqlite3 = require("sqlite3").verbose();
        this.db = new sqlite3.Database("/Users/victor/Desktop/VictorRepo/gym/gym-api/database.db", (err) => {
            if (err) {
                return console.log(err.message);
            }

            console.log("Successful connection to the database 'database.db");
        });
    }
}

export default new App();
