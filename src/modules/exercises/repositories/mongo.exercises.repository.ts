import { Collection, Db } from "mongodb";
import { IExercisesRepository } from "../interfaces/exercises.repository";
import { Exercise } from "../models/exercises";

export class MongoExercisesRepository implements IExercisesRepository {

    public collection: Collection;

    constructor(db: Db, collectionName: string) {
        this.collection = db.collection(collectionName);
    }

    public async createExercise(exercise: Exercise): Promise<Exercise> {
        return await this.collection.insert(exercise);
    }

    public async getExercises(): Promise<Exercise[]> {
        return await this.collection.find().toArray();
    }

    public async getExerciseById(id: string): Promise<Exercise> {
        return await this.collection.find({ sessionId: id });
    }

    public async updateExercise(exercise: Exercise): Promise<Exercise> {
        return await this.collection.update({ exerciseId: exercise.exerciseId }, {
            $set: {

                description: exercise.description,
                image: exercise.image,
                name: exercise.name,
                reps: exercise.reps,
                series: exercise.series,
                timeCap: exercise.timeCap,
                video: exercise.video,
                weight: exercise.weight
            }
        });
    }

    public async deleteExercise(id: string): Promise<boolean> {
        return await this.collection.deleteOne({ exerciseId: id });
    }
}
