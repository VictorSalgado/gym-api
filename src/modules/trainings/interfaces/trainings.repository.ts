import { Training, TrainingType } from "../models/Trainings";

export interface ITrainingsRepository {

    createTraining(training: Training): Promise<Training>;
    getTrainings(): Promise<Training[]>;
    getTrainingById(trainingId: string): Promise<Training>;
    getTrainingsByType(type: TrainingType): Promise<Training[]>;
    updateTraining(training: Training): Promise<Training>;
    deleteTraining(trainingId: string): Promise<void>;
}
