import { Request, Response } from "express";
import { UsersBusinessController } from "../businessControllers/users.businessController";
import { User } from "../models/users";

export class UsersRouteController {

    private userBusinessController: UsersBusinessController;

    constructor(userBusinessController: UsersBusinessController = new UsersBusinessController()) {
        this.userBusinessController = userBusinessController;
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { name, password } = req.body;

            const result = await this.userBusinessController.login(name, password);
            return res.status(result.code).send(result.message);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userBusinessController.getUsers();
            return res.status(200).send(users);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public getUserById = async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId;
            const user = await this.userBusinessController.getUserById(userId);

            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {

            const { name, mail, password, role } = req.body;

            if (!name) { return res.status(400).send({ message: "USERNAME_IS_MANDATORY" }); }

            const newUser = await this.userBusinessController.createUser(
                new User(null, name, mail, password, role));
            return res.status(201).send(newUser);
        } catch (error) {
            return res.status(400).send({ message: error.toString() });
        }
    }

    public updateUser = async (req: Request, res: Response) => {
        try {

            if (req.params.userId !== req.body.userId) {
                return res.status(400).send({ message: "USER_ID_NOT_MATCH" });
            } else {
                const user = await this.userBusinessController.updateUser(
                    new User(req.body.userId, req.body.name, req.body.mail, req.body.password, req.body.role));
                return res.status(200).send(user);
            }
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId;
            await this.userBusinessController.deleteUser(userId);
            return res.status(200).send();
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }
}
