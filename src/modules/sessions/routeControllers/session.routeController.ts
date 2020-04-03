import { Request, Response } from "express";
import { SessionBusinessController } from "../businessControllers/session.businessController";
import { Session } from "../models/sessions";

export class SessionRouteController {

    private sessionBusinessController: SessionBusinessController;

    constructor(sessionBusinessController: SessionBusinessController = new SessionBusinessController()) {
        this.sessionBusinessController = sessionBusinessController;
    }

    public getSessions = async (req: Request, res: Response) => {
        try {
            console.log("Get sessions");

            const sessions = await this.sessionBusinessController.getSessions();
            return res.status(200).send(sessions);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public getSessionById = async (req: Request, res: Response) => {
        try {
            const sessionId = req.params.sessionId;
            const session = await this.sessionBusinessController.getSessionById(sessionId);
            return res.status(200).send(session);
        } catch (error) {
            return res.status(400).send({ message: error.toString() });
        }
    }

    public addSession = async (req: Request, res: Response) => {
        try {

            if (!name) { return res.status(400).send({ message: "USERNAME_IS_MANDATORY" }); }

            const newSession = await this.sessionBusinessController.createSession(
                new Session(null, req.body.date, req.body.coach, req.body.place, req.body.training));
            return res.status(201).send(newSession);
        } catch (error) {
            return res.status(400).send({ message: error.toString() });
        }
    }

    public editSession = async (req: Request, res: Response) => {
        try {

            if (req.params.sessionId !== req.body.sessionId) {
                return res.status(400).send({ message: "SESSION_ID_NOT_MATCH" });
            } else {
                const session = await this.sessionBusinessController.updateSession(
                    new Session(req.body.sessionId, req.body.date, req.body.coach, req.body.place,
                        req.body.training)
                );
                return res.status(200).send(session);
            }
        } catch (error) {
            return res.status(400).send({ message: error.toString() });
        }
    }

    public deleteSession = async (req: Request, res: Response) => {
        try {
            const sessionId = req.params.sessionId;
            await this.sessionBusinessController.deleteSession(sessionId);
            return res.status(200).send();
        } catch (error) {
            return res.status(400).send({ message: error.toString() });
        }
    }
}
