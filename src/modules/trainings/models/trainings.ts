import { Exercise } from "../../exercises/models/exercises";
import { User } from "../../users/models/users";

export enum TrainingType {
    CROSSFIT = 0,
    MOBILITY = 1,
    APOCALIPSIS_WOD = 2
}

export class Training {

    public trainingId: string;
    public type: TrainingType;
    public warmUp: Exercise[];
    public wod: Exercise[];
    public createdBy: User;

    constructor(trainingId: string, type: TrainingType, warmUp: Exercise[], wod: Exercise[], createdBy: User) {

        this.trainingId = trainingId;
        this.type = type;
        this.warmUp = warmUp;
        this.wod = wod;
        this.createdBy = createdBy;
    }
}
