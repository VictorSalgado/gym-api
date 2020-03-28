import { Excercise } from "../models/exercises";

export class ExercisesRepository {

    public mockExercises = [];

    public async getExercises(): Promise<Excercise[]> {
        return this.mockExercises;
    }
}
