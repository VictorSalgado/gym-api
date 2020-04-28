import "dotenv/config";
import * as jwt from "jsonwebtoken";
import { User } from "../models/users";
import { SQLiteUsersRepository } from "../repositories/sqlite.users.repository";

export class UsersBusinessController {

    private userRepository: SQLiteUsersRepository;

    constructor(userRepository: SQLiteUsersRepository = new SQLiteUsersRepository()) {
        this.userRepository = userRepository;
    }

    public async login(username: string, password: string): Promise<any> {
        try {
            const result =  { code: null, message: null };
            const user = await this.userRepository.getUserAuth(username, password);

            if (user) {
                const accessToken = jwt.sign({username: user.name }, process.env.ACCESS_TOKEN);

                if (accessToken) {
                    result.code = 200;
                    result.message = {accessToken};
                } else {
                    result.code = 400;
                    result.message = "AUTH_ERROR";
                }
            }

            if (!user) {
                result.code = 400;
                result.message = "USERNAME_OR_PASSWORD_INCORRECT";
            }

            return result;
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

    public async updateUser(user: User): Promise<User> {
        try {
            await this.userRepository.updateUser(user);
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
