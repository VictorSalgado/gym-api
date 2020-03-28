import {Request, Response} from "express";
import {UsersBusinessController} from "../businessControllers/users.businessController";

export class UsersRouteController {

    private userBusinessController: UsersBusinessController;

    constructor(userBusinessController: UsersBusinessController = new UsersBusinessController()) {
        this.userBusinessController = userBusinessController;
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            console.log("Get user");
            const users = await this.userBusinessController.getUsers();
            return res.status(200).send(users);
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }
}
