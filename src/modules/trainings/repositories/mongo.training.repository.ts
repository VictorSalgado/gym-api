import { Collection, Db } from "mongodb";
import { ITrainingsRepository } from "../interfaces/trainings.repository";
import { Training, TrainingType } from "../models/trainings";

export class MongoTrainingsRepository implements ITrainingsRepository {

    public collection: Collection;

    constructor(db: Db, collectionName: string) {
        this.collection = db.collection(collectionName);
    }

    public async createTraining(training: Training): Promise<Training> {
        return await this.collection.insert(training);
    }

    public async getTrainings(): Promise<Training[]> {
        return await this.collection.find().toArray();
    }

    public async getTrainingById(id: string): Promise<Training> {
        return await this.collection.find({ trainingId: id });
    }

    public async getTrainingsByType(trainingType: TrainingType): Promise<Training[]> {
        return await this.collection.find({ type: trainingType });
    }

    public async updateTraining(training: Training): Promise<Training> {
        return await this.collection.update({ traingId: training.trainingId }, {
            $set: {
                createdBy: training.createdBy,
                type: training.type,
                warmUp: training.warmUp,
                wod: training.wod
            }
        });
    }

    public async deleteTraining(id: string): Promise<boolean> {
        return await this.collection.deleteOne({ trainingId: id });
    }
}
