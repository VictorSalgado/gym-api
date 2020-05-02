import { Training, TrainingType } from "../models/Trainings";

export interface ITrainingsRepository {

    createTraining(training: Training): Promise<Training>;
    getTrainings(): Promise<Training[]>;
    getTrainingById(id: string): Promise<Training>;
    getTrainingsByType(type: TrainingType): Promise<Training[]>;
    updateTraining(training: Training): Promise<Training>;
    deleteTraining(id: string): Promise<boolean>;
}
