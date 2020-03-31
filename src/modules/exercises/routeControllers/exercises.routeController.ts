import { Request, Response } from "express";
import { Exercise } from "../models/exercises";
import { ExercisesBusinessController } from "./../businessContorllers/exercises.businessController";

export class ExercisesRouteController {

    private exercisesBusinessController: ExercisesBusinessController;

    constructor(exercisesBusinessController: ExercisesBusinessController = new ExercisesBusinessController()) {
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

    public getExerciseById = async (req: Request, res: Response) => {
        try {
            const exerciseId = req.params.exerciseId;
            const exercise = await this.exercisesBusinessController.getExerciseById(exerciseId);

            return res.status(200).send(exercise);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public addExercise = async (req: Request, res: Response) => {
        try {

            const series = req.body.series;
            const reps = req.body.reps;
            const weight = req.body.weight;
            const time = req.body.time;
            const name = req.body.name;
            const description = req.body.description;
            const image = req.body.image;
            const video = req.body.video;

            if (!name) { return res.status(400).send({ message: "NAME_IS_MANDATORY" }); }

            const newExercise = await this.exercisesBusinessController.
                addExercise(new Exercise(series, reps, weight, time, name, description, image, video));
            return res.status(200).send(newExercise);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public deleteExercise = async (req: Request, res: Response) => {
        try {
            const exerciseId = req.params.exerciseId;
            const exercise = await this.exercisesBusinessController.deleteExercise(exerciseId);
            return res.status(200).send(exercise);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }
}
