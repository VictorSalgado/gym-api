import { Training, TrainingType } from "../models/trainings";

export class TrainingRepository {

    public mockTraining: Training[] = [
        {
            createdBy: null,
            trainingId: "1",
            type: TrainingType.CROSSFIT,
            warmUp: [],
            wod: []
        }
    ];

    public async getTrainings(): Promise<Training[]> {
        return this.mockTraining;
    }

    public async getTrainingsByType(type: TrainingType): Promise<Training[]> {
        return this.mockTraining.filter((training) => training.type === type);
    }
}
