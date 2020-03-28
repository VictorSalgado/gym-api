import {Request, Response} from "express";
import { SessionBusinessController } from "../businessControllers/session.businessController";

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
            return res.status(400).send({message: error});
        }
    }
}
