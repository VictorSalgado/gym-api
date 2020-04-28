import { Training, TrainingType } from "../models/trainings";
import { SQLiteTrainingRepository } from "../repositories/sqlite.training.repository";

export class TrainingBusinessController {

    private trainingRepository: SQLiteTrainingRepository;

    constructor(trainigRepository: SQLiteTrainingRepository = new SQLiteTrainingRepository()) {
        this.trainingRepository = trainigRepository;
    }

    public async getTrainings(): Promise<Training[]> {
        try {
            return this.trainingRepository.getTrainings();
        } catch (error) {
            throw new Error(error);
        }
    }

    public async getTrainingsByType(type: TrainingType): Promise<Training[]> {
        try {
            return this.trainingRepository.getTrainingsByType(type);
        } catch (error) {
            throw new Error(error);
        }
    }

    public async getTrainingsById(trainingId: string): Promise<Training> {
        try {
            return this.trainingRepository.getTrainingById(trainingId);
        } catch (error) {
            throw new Error(error);
        }
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
