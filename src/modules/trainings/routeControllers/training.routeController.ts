import { Request, Response } from "express";
import { TrainingBusinessController } from "../businessControllers/training.businessController";
import { TrainingType } from "../models/trainings";

export class TrainingRouteController {

    private trainingBusinessController: TrainingBusinessController;

    public getTrainings = async (req: Request, res: Response) => {
        try {
            const trainings = this.trainingBusinessController.getTrainings;
            res.status(200).send(trainings);
        } catch (error) {
            res.status(400).send({message: error});
        }
    }

    public getTrainingsByType = async (req: Request, res: Response) => {
        try {
            const type = TrainingType[req.params.type];
            const trainingsByType = this.trainingBusinessController.getTrainingsByType(type);
            res.status(200).send(trainingsByType);
        } catch (error) {
            res.status(400).send({message: error});
        }
    }
}
