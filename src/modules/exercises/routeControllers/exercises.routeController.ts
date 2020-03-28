import { Request, Response } from "express";
import { ExcercisesBusinessController } from "./../businessContorllers/exercises.businessController";

export class ExercisesRouteController {

    private exercisesBusinessController: ExcercisesBusinessController;

    constructor(exercisesBusinessController: ExcercisesBusinessController = new ExcercisesBusinessController()) {
        this.exercisesBusinessController = exercisesBusinessController;
    }

    public getExercises = async (req: Request, res: Response) => {
        try {
            const exercises = await this.exercisesBusinessController.getExercises();
            return res.status(200).send(exercises);
        } catch (error) {
            res.status(400).send({ message: error });
        }
    }
}
