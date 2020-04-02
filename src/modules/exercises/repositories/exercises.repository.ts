import App from "../../../app";
import { Exercise } from "../models/exercises";

export class ExercisesRepository {

    public async getExercises(): Promise<Exercise[]> {

        const sql = "SELECT * FROM Exercise;";
        const params = [];

        return await new Promise((resolve, reject) => {
            App.database().all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows as Exercise[]);
            });
        });
    }

    public async getExerciseById(exerciseId: string): Promise<Exercise> {

        const sql = "SELECT * FROM Exercise WHERE exercise_id = ?;";
        const params = [exerciseId];

        return await new Promise((resolve, reject) => {
            App.database().get(sql, params, (err, row) => {
                if (err) {
                    reject(err);
                }

                resolve(row as Exercise);
            });
        });
    }

    public async createExercise(exercise: Exercise): Promise<Exercise> {

        const sql = "INSERT INTO Exercise (exercise_id, series, reps, weight, time, name, description, image, video) " +
            "VALUES (?,?,?,?,?,?,?,?,?);";
        const params = [exercise.exerciseId, exercise.series, exercise.reps, exercise.weight, exercise.time,
            exercise.time, exercise.name, exercise.description, exercise.image, exercise.video];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public async updateExercise(exercise: Exercise): Promise<Exercise> {

        const sql = "UPDATE Exercise SET series = ? AND reps = ? AND weight = ? AND time = ? AND " +
            "name = ? AND description = ? AND image = ? AND video = ? WHERE exercise_id = ?;";
        const params = [exercise.series, exercise.reps, exercise.weight, exercise.time,
            exercise.name, exercise.description, exercise.image, exercise.video];

        return await new Promise((resolve, reject) => {
            App.database().run(sql, params, (err, row) => {
                if (err) {
                    reject(err);
                }

                resolve(row);
            });
        });
    }

    public async deleteExercise(exerciseId: string): Promise<void> {

        const sql = "DELETE FROM Exercise WHERE exercise_id = ?;";
        const params = [exerciseId];

        return await new Promise((resolve, reject) => {
            App.database().run(sql, params, (err, row) => {
                if (err) {
                    reject(err);
                }

                resolve(row);
            });
        });
    }
}
