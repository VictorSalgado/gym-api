import { Training, TrainingType } from "../models/trainings";
import { TrainingRepository } from "../repositories/training.repository";

export class TrainingBusinessController {

    private trainingRepository: TrainingRepository;

    public async getTrainings(): Promise<Training[]> {
        return this.trainingRepository.getTrainings();
    }

    public async getTrainingsByType(type: TrainingType): Promise<Training[]> {
        return this.trainingRepository.getTrainingsByType(type);
    }
}
