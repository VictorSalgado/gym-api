import { User } from "../models/users";
import { UsersRepository } from "../repositories/users.repository";

export class UsersBusinessController {

    private userRepository: UsersRepository;

    constructor(userRepository: UsersRepository = new UsersRepository()) {
        this.userRepository = userRepository;
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
