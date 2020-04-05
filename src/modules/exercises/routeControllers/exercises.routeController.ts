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

    public createExercise = async (req: Request, res: Response) => {
        try {

            const { series, reps, weight, time, name, description, image, video } = req.body;

            if (!name) { return res.status(400).send({ message: "NAME_IS_MANDATORY" }); }

            const newExercise = await this.exercisesBusinessController.
                createExercise(new Exercise(null, series, reps, weight, time, name, description, image, video));
            return res.status(201).send(newExercise);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public updateExercise = async (req: Request, res: Response) => {
        try {

            const { exerciceId, series, reps, weight, time, name, description, image, video } = req.body;

            const updatedExercise = await this.exercisesBusinessController.
                updateExercise(new Exercise(exerciceId, series, reps, weight, time, name, description, image, video));
            return res.status(201).send(updatedExercise);
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
