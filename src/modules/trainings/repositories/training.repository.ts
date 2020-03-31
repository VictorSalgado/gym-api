import App from "../../../app";
import { Training, TrainingType } from "../models/trainings";

export class TrainingRepository {

    public async getTrainings(): Promise<Training[]> {

        const sql = "SELECT * FROM Training;";
        const params = [];

        return await new Promise((resolve, reject) => {
            App.database().all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows as Training[]);
            });
        });
    }

    public async getTrainingsByType(type: TrainingType): Promise<Training[]> {

        const sql = "SELECT * FROM Training WHERE type = ?";
        const params = [type];

        return await new Promise((resolve, reject) => {
            App.database().all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows as Training[]);
            });
        });
    }
}
