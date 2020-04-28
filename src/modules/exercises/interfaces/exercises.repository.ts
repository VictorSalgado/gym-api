import { Exercise } from "../models/exercises";

export interface IExercisesRepository {

    createExercise(exercise: Exercise): Promise<Exercise>;
    getExercises(): Promise<Exercise[]>;
    getExerciseById(exerciseId: string): Promise<Exercise>;
    updateExercise(exercise: Exercise): Promise<Exercise>;
    deleteExercise(exerciseId: string): Promise<void>;
}
