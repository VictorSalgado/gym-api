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

    public async createTraining(training: Training): Promise<Training> {

        const sql = "INSERT INTO User (training_id, type, created_by, warm_up, wod) VALUES (?,?,?,?,?);";
        const params = [training.trainingId, training.type, training.createdBy, training.warmUp, training.wod];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public async updateTraining(training: Training): Promise<Training> {

        const sql = "UPDATE Training SET type = ?, created_by = ?, warm_up = ?, wod = ? WHERE training_id = ?";
        const params = [training.type, training.createdBy, training.warmUp, training.wod, training.trainingId];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public async deleteTraining(trainingId: string): Promise<void> {

        const sql = "DELETE FROM Traing WHERE training_id = ?";
        const params = [trainingId];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, rows) => {

                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    }
}
