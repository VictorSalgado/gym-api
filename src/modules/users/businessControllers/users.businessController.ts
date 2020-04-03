import "dotenv/config";
import * as jwt from "jsonwebtoken";
import { User } from "../models/users";
import { UsersRepository } from "../repositories/users.repository";

export class UsersBusinessController {

    private userRepository: UsersRepository;

    constructor(userRepository: UsersRepository = new UsersRepository()) {
        this.userRepository = userRepository;
    }

    public async login(username: string, password: string): Promise<any> {
        try {
            const user = await this.userRepository.getUserAuth(username, password);

            if (user) {
                const accessToken = jwt.sign({username: user.name }, process.env.ACCESS_TOKEN);
                console.log(accessToken);
                return {accessToken};
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    public async getUsers(): Promise<User[]> {
        try {
            return await this.userRepository.getUsers();
        } catch (error) {
            throw new Error(error);
        }
    }

    public async getUserById(userId: string): Promise<User> {
        try {
            return await this.userRepository.getUserById(userId);
        } catch (error) {
            throw new Error(error);
        }
    }

    public async createUser(user: User): Promise<User> {
        try {
            await this.userRepository.createUser(user);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async editUser(user: User): Promise<User> {
        try {
            await this.userRepository.editUser(user);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async deleteUser(userId: string): Promise<void> {
        try {
            await this.userRepository.deleteUser(userId);
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
}
