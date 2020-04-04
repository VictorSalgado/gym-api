import { Training, TrainingType } from "../models/trainings";
import { TrainingRepository } from "../repositories/training.repository";

export class TrainingBusinessController {

    private trainingRepository: TrainingRepository;

    constructor(trainigRepository: TrainingRepository = new TrainingRepository()) {
        this.trainingRepository = trainigRepository;
    }

    public async getTrainings(): Promise<Training[]> {
        return this.trainingRepository.getTrainings();
    }

    public async getTrainingsByType(type: TrainingType): Promise<Training[]> {
        return this.trainingRepository.getTrainingsByType(type);
    }

    public async createTraining(training: Training): Promise<Training> {
        try {
            await this.trainingRepository.createTraining(training);
            return training;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async updateTraining(training: Training): Promise<Training> {
        try {
            await this.trainingRepository.updateTraining(training);
            return training;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async deleteTraining(trainingId: string): Promise<void> {
        try {
            await this.trainingRepository.deleteTraining(trainingId);
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
}
