import { Request, Response } from "express";
import { TrainingBusinessController } from "../businessControllers/training.businessController";
import { Training, TrainingType } from "../models/trainings";

export class TrainingRouteController {

    private trainingBusinessController: TrainingBusinessController;

    constructor(trainingBusinessController: TrainingBusinessController = new TrainingBusinessController()) {
        this.trainingBusinessController = trainingBusinessController;
    }

    public getTrainings = async (req: Request, res: Response) => {
        try {
            const trainings = await this.trainingBusinessController.getTrainings();
            return res.status(200).send(trainings);
        } catch (error) {
            res.status(400).send({ message: error });
        }
    }

    public getTrainingsByType = async (req: Request, res: Response) => {
        try {
            const type = TrainingType[req.params.type];
            const trainingsByType = await this.trainingBusinessController.getTrainingsByType(type);
            res.status(200).send(trainingsByType);
        } catch (error) {
            res.status(400).send({ message: error });
        }
    }

    public addTraining = async (req: Request, res: Response) => {
        try {
            const training = new Training(null, req.body.type, req.body.console.warmUp,
                req.body.wod, req.body.createdBy);

            await this.trainingBusinessController.createTraining(training);
            return res.status(201).send(training);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public editTraining = async (req: Request, res: Response) => {
        try {

            if (req.params.trainingId !== req.body.trainingId) {
                return res.status(400).send({ message: "TRAINING_ID_NOT_MATCH" });
            } else {

                const training = new Training(req.body.trainingId, req.body.type, req.body.console.warmUp,
                    req.body.wod, req.body.createdBy);

                const editTraining = await this.trainingBusinessController.updateTraining(training);
                return res.status(200).send(editTraining);
            }
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public deleteTraining = async (req: Request, res: Response) => {
        try {
            const trainingId = req.body.trainingId;
            await this.trainingBusinessController.deleteTraining(trainingId);
            return res.status(200).send();
        } catch (error) {
            res.status(400).send({ message: error });
        }
    }
}
