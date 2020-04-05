import { Exercise } from "../models/exercises";
import { ExercisesRepository } from "../repositories/exercises.repository";

export class ExercisesBusinessController {

    private excercisesRepository: ExercisesRepository;

    constructor(excercisesRepository: ExercisesRepository = new ExercisesRepository()) {
        this.excercisesRepository = excercisesRepository;
    }

    public async getExercises(): Promise<Exercise[]> {
        return this.excercisesRepository.getExercises();
    }

    public async getExerciseById(exerciseId: string): Promise<Exercise> {
        return this.excercisesRepository.getExerciseById(exerciseId);
    }

    public async createExercise(exercise: Exercise): Promise<Exercise> {
        return this.excercisesRepository.createExercise(exercise);
    }

    public async updateExercise(exercise: Exercise): Promise<Exercise> {
        return this.excercisesRepository.updateExercise(exercise);
    }

    public async deleteExercise(exerciseId: string): Promise<void> {
        return this.excercisesRepository.deleteExercise(exerciseId);
    }
}
