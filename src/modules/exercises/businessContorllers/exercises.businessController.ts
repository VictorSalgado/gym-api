import { Excercise } from "../models/exercises";
import { ExercisesRepository } from "../repositories/exercises.repository";

export class ExcercisesBusinessController {

    private excercisesRepository: ExercisesRepository;

    constructor(excercisesRepository: ExercisesRepository = new ExercisesRepository()) {
        this.excercisesRepository = excercisesRepository;
    }

    public async getExercises(): Promise<Excercise[]> {
        return this.excercisesRepository.getExercises();
    }
}
